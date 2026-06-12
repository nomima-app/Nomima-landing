// Nomima landing — Cloudflare Worker.
//
// Serves the static marketing site (via the ASSETS binding) AND a small backend:
//   POST /api/request-download  → store the lead, mint a single-use token, email the link
//   GET  /get?t=<token>         → validate the token (unused + unexpired), burn it, 302 → DMG
//   POST /access                → device check-in (fingerprint + version) + access gate response
//   GET  /admin                 → dashboard (redirects to /admin/login if not authenticated)
//   GET  /admin/login           → login form
//   POST /admin/login           → verify credentials, set session cookie, redirect to /admin
//   GET  /admin/logout          → clear session cookie, redirect to /admin/login
//   POST /admin/revoke          → block a device fingerprint (session-authenticated)
//   POST /admin/unrevoke        → unblock a device fingerprint (session-authenticated)
//   GET  /admin/data            → JSON data for dashboard (session-authenticated)
//
// Secrets (set via `wrangler secret put`):
//   ADMIN_USER   — login username
//   ADMIN_PASS   — login password (also used as HMAC session-signing key)

const TOKEN_TTL_HOURS = 24;
const FALLBACK_DMG = "https://github.com/nomima-app/Nomima-landing/releases/latest";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/api/request-download" && request.method === "POST") {
      return handleRequest(request, env, url, ctx);
    }
    if (path === "/get") {
      return handleGet(request, env, url);
    }
    if (path === "/access" && request.method === "POST") {
      return handleAccess(request, env);
    }
    if (path === "/admin/login") {
      return handleAdminLogin(request, env);
    }
    if (path === "/admin/logout") {
      return handleAdminLogout(request, env);
    }
    if (path === "/admin/revoke" && request.method === "POST") {
      return handleAdminRevoke(request, env, true);
    }
    if (path === "/admin/unrevoke" && request.method === "POST") {
      return handleAdminRevoke(request, env, false);
    }
    if (path === "/admin/delete-device" && request.method === "POST") {
      return handleAdminDeleteDevice(request, env);
    }
    if (path === "/admin/delete-lead" && request.method === "POST") {
      return handleAdminDeleteLead(request, env);
    }
    if (path === "/admin/export/devices") {
      return handleAdminExport(request, env, "devices");
    }
    if (path === "/admin/export/leads") {
      return handleAdminExport(request, env, "leads");
    }
    if (path === "/admin/data") {
      return handleAdminData(request, env);
    }
    if (path === "/admin") {
      return handleAdminDashboard(request, env);
    }
    // Everything else is a static asset (this handler only runs for non-asset paths).
    return env.ASSETS.fetch(request);
  },
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function makeToken() {
  // 40 hex chars of CSPRNG — unguessable, URL-safe.
  const b = new Uint8Array(20);
  crypto.getRandomValues(b);
  return [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

async function handleRequest(request, env, url, ctx) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }
  const email = String(body.email || "").trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ error: "invalid_email" }, 400);
  }

  // Bot check (Turnstile) — only enforced once a secret is configured.
  if (env.TURNSTILE_SECRET) {
    const ok = await verifyTurnstile(env, body.turnstileToken, request);
    if (!ok) return json({ error: "captcha_failed" }, 403);
  }

  const now = new Date();
  const country = request.headers.get("cf-ipcountry") || null;

  await env.DB.prepare(
    "INSERT INTO leads (email, created_at, source, ip_country) VALUES (?1, ?2, 'landing', ?3) ON CONFLICT(email) DO NOTHING",
  )
    .bind(email, now.toISOString(), country)
    .run();

  const token = makeToken();
  const expires = new Date(now.getTime() + TOKEN_TTL_HOURS * 3600 * 1000);
  await env.DB.prepare(
    "INSERT INTO download_tokens (token, email, created_at, expires_at, ip_country) VALUES (?1, ?2, ?3, ?4, ?5)",
  )
    .bind(token, email, now.toISOString(), expires.toISOString(), country)
    .run();

  const link = `${url.origin}/get?t=${token}`;
  // Don't make the visitor wait on the email round-trip.
  ctx.waitUntil(sendDownloadEmail(env, email, link, url.origin));

  return json({ ok: true });
}

async function handleGet(request, env, url) {
  const token = (url.searchParams.get("t") || "").trim();
  if (!token || token.length < 8) {
    return Response.redirect(`${url.origin}/?link=invalid#get`, 302);
  }
  const row = await env.DB.prepare(
    "SELECT token, expires_at, used_at FROM download_tokens WHERE token = ?1",
  )
    .bind(token)
    .first();

  const now = new Date();
  if (!row || row.used_at || new Date(row.expires_at) < now) {
    return Response.redirect(`${url.origin}/?link=expired#get`, 302);
  }

  // Burn it (single use). The WHERE guard avoids a double-spend race.
  const upd = await env.DB.prepare(
    "UPDATE download_tokens SET used_at = ?1 WHERE token = ?2 AND used_at IS NULL",
  )
    .bind(now.toISOString(), token)
    .run();
  if (!upd.meta.changes) {
    return Response.redirect(`${url.origin}/?link=expired#get`, 302);
  }

  const dmg = await resolveDmgUrl(env, url);
  return Response.redirect(dmg, 302);
}

async function resolveDmgUrl(env, url) {
  try {
    const res = await env.ASSETS.fetch(new Request(`${url.origin}/latest.json`));
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.url === "string" && data.url.startsWith("http")) return data.url;
    }
  } catch {
    /* fall through */
  }
  return FALLBACK_DMG;
}

async function verifyTurnstile(env, tokenStr, request) {
  if (!tokenStr) return false;
  const form = new FormData();
  form.append("secret", env.TURNSTILE_SECRET);
  form.append("response", tokenStr);
  const ip = request.headers.get("cf-connecting-ip");
  if (ip) form.append("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    return !!data.success;
  } catch {
    return false;
  }
}

// ─── /access — device check-in + access gate ────────────────────────────────

async function handleAccess(request, env) {
  let fingerprint, version, os_version, hw_model, hw_name, chip, memory, cpu_cores;
  try {
    const body = await request.json();
    fingerprint = String(body.fingerprint || "").trim().slice(0, 128);
    version     = String(body.version    || "").trim().slice(0, 32);
    os_version  = body.os_version ? String(body.os_version).trim().slice(0, 64)  : null;
    hw_model    = body.hw_model   ? String(body.hw_model).trim().slice(0, 64)   : null;
    hw_name     = body.hw_name    ? String(body.hw_name).trim().slice(0, 64)    : null;
    chip        = body.chip       ? String(body.chip).trim().slice(0, 64)       : null;
    memory      = body.memory     ? String(body.memory).trim().slice(0, 32)     : null;
    cpu_cores   = body.cpu_cores  ? String(body.cpu_cores).trim().slice(0, 64)  : null;
  } catch {
    return json({ open: true }); // fail-open on malformed body
  }

  if (!fingerprint) return json({ open: true });

  const now     = new Date().toISOString();
  const country = request.headers.get("cf-ipcountry") || null;
  const city    = request.headers.get("cf-ipcity")    || null;
  const region  = request.headers.get("cf-region")    || null;

  // Upsert check-in — bump last_seen + count on every contact.
  // os_version / hw_model / geo only update when the client sends them (non-null).
  await env.DB.prepare(`
    INSERT INTO device_checkins
      (fingerprint, first_seen, last_seen, version, ip_country, city, region,
       os_version, hw_model, hw_name, chip, memory, cpu_cores, checkin_count)
    VALUES (?1, ?2, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, 1)
    ON CONFLICT(fingerprint) DO UPDATE SET
      last_seen     = ?2,
      version       = ?3,
      ip_country    = ?4,
      city          = COALESCE(?5,  city),
      region        = COALESCE(?6,  region),
      os_version    = COALESCE(?7,  os_version),
      hw_model      = COALESCE(?8,  hw_model),
      hw_name       = COALESCE(?9,  hw_name),
      chip          = COALESCE(?10, chip),
      memory        = COALESCE(?11, memory),
      cpu_cores     = COALESCE(?12, cpu_cores),
      checkin_count = checkin_count + 1
  `).bind(fingerprint, now, version, country, city, region, os_version, hw_model, hw_name, chip, memory, cpu_cores).run();

  // Check revocation list.
  const blocked = await env.DB.prepare(
    "SELECT 1 FROM blocked_devices WHERE fingerprint = ?1"
  ).bind(fingerprint).first();

  if (blocked) {
    return json({
      open: false,
      message:
        "Your access has been revoked. Contact support@nomima.io if you think this is a mistake.",
    });
  }

  return json({ open: true });
}

// ─── /admin — session-cookie auth ────────────────────────────────────────────

const SESSION_COOKIE = "nm_admin_session";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

async function sessionSign(key, expiresTs) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", keyMaterial, new TextEncoder().encode(String(expiresTs)));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function sessionVerify(env, cookieValue) {
  if (!env.ADMIN_PASS || !cookieValue) return false;
  const sep = cookieValue.lastIndexOf(":");
  if (sep < 1) return false;
  const expiresStr = cookieValue.slice(0, sep);
  const hmacHex = cookieValue.slice(sep + 1);
  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  const expected = await sessionSign(env.ADMIN_PASS, expires);
  if (expected.length !== hmacHex.length) return false;
  // Constant-time comparison to avoid timing attacks.
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ hmacHex.charCodeAt(i);
  return diff === 0;
}

function getCookieValue(request, name) {
  const header = request.headers.get("cookie") || "";
  for (const part of header.split(";")) {
    const eq = part.indexOf("=");
    if (eq < 0) continue;
    if (part.slice(0, eq).trim() === name) return part.slice(eq + 1).trim();
  }
  return null;
}

async function adminSessionCheck(request, env) {
  return sessionVerify(env, getCookieValue(request, SESSION_COOKIE));
}

function loginPage(error) {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nomima Admin — Login</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #07070e; --surface: #0e0e1a; --border: rgba(99,102,241,0.18);
    --fg: #e0e0f0; --muted: #6a6a88; --accent: #6366f1; --red: #f87171;
    --font: -apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Helvetica,Arial,sans-serif;
  }
  body { background: var(--bg); color: var(--fg); font-family: var(--font); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; }
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 36px; width: 100%; max-width: 360px; }
  h1 { font-size: 20px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 4px; }
  .sub { color: var(--muted); font-size: 13px; margin-bottom: 28px; }
  label { display: block; font-size: 12px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
  input { display: block; width: 100%; background: rgba(255,255,255,0.04); border: 1px solid var(--border); border-radius: 8px; padding: 10px 14px; font-size: 14px; color: var(--fg); font-family: var(--font); outline: none; margin-bottom: 16px; }
  input:focus { border-color: var(--accent); }
  button[type=submit] { width: 100%; padding: 11px; border-radius: 8px; background: var(--accent); color: #fff; font-size: 14px; font-weight: 600; border: none; cursor: pointer; font-family: var(--font); letter-spacing: -0.01em; margin-top: 4px; }
  button[type=submit]:hover { opacity: 0.85; }
  .err { background: rgba(248,113,113,0.10); border: 1px solid rgba(248,113,113,0.25); color: var(--red); border-radius: 8px; padding: 10px 14px; font-size: 13px; margin-bottom: 18px; }
</style>
</head>
<body>
<div class="card">
  <h1>Nomima Admin</h1>
  <p class="sub">Sign in to continue</p>
  ${error ? `<div class="err">${error}</div>` : ""}
  <form method="POST" action="/admin/login">
    <label for="u">Username</label>
    <input id="u" name="username" type="text" autocomplete="username" required autofocus>
    <label for="p">Password</label>
    <input id="p" name="password" type="password" autocomplete="current-password" required>
    <button type="submit">Sign in</button>
  </form>
</div>
</body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}

async function handleAdminLogin(request, env) {
  if (request.method !== "POST") return loginPage();

  let username, password;
  try {
    const fd = await request.formData();
    username = (fd.get("username") || "").trim();
    password = (fd.get("password") || "").trim();
  } catch {
    return loginPage("Invalid request");
  }

  if (!env.ADMIN_USER || !env.ADMIN_PASS || username !== env.ADMIN_USER || password !== env.ADMIN_PASS) {
    return loginPage("Invalid username or password");
  }

  const expires = Date.now() + SESSION_TTL_MS;
  const hmac = await sessionSign(env.ADMIN_PASS, expires);
  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/admin",
      "Set-Cookie": `${SESSION_COOKIE}=${expires}:${hmac}; HttpOnly; SameSite=Strict; Path=/; Secure; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}`,
      "cache-control": "no-store",
    },
  });
}

function handleAdminLogout() {
  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/admin/login",
      "Set-Cookie": `${SESSION_COOKIE}=; HttpOnly; SameSite=Strict; Path=/; Secure; Max-Age=0`,
      "cache-control": "no-store",
    },
  });
}

async function fetchAdminData(env) {
  const [checkins, blocked, leads, tokens] = await Promise.all([
    env.DB.prepare(
      "SELECT fingerprint, first_seen, last_seen, version, ip_country, city, region, os_version, hw_model, hw_name, chip, memory, cpu_cores, checkin_count FROM device_checkins ORDER BY last_seen DESC LIMIT 1000"
    ).all(),
    env.DB.prepare("SELECT fingerprint FROM blocked_devices").all(),
    env.DB.prepare(
      "SELECT email, created_at, ip_country FROM leads ORDER BY created_at DESC LIMIT 500"
    ).all(),
    env.DB.prepare(
      "SELECT email, created_at, used_at, ip_country FROM download_tokens ORDER BY created_at DESC LIMIT 500"
    ).all(),
  ]);
  const blockedSet = new Set((blocked.results || []).map((r) => r.fingerprint));
  return { checkins: checkins.results || [], blockedSet, leads: leads.results || [], tokens: tokens.results || [] };
}

async function handleAdminData(request, env) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);
  const { checkins, blockedSet, leads, tokens } = await fetchAdminData(env);
  const checkinsWithStatus = checkins.map((r) => ({ ...r, blocked: blockedSet.has(r.fingerprint) }));
  return json({ checkins: checkinsWithStatus, leads, tokens });
}

async function handleAdminRevoke(request, env, revoke) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);

  let body;
  try { body = await request.json(); } catch { return json({ error: "bad_request" }, 400); }

  const fp = String(body.fingerprint || "").trim();
  if (!fp) return json({ error: "missing_fingerprint" }, 400);

  if (revoke) {
    await env.DB.prepare(
      "INSERT INTO blocked_devices (fingerprint, blocked_at, reason) VALUES (?1, ?2, ?3) ON CONFLICT(fingerprint) DO NOTHING"
    ).bind(fp, new Date().toISOString(), body.reason || null).run();
  } else {
    await env.DB.prepare("DELETE FROM blocked_devices WHERE fingerprint = ?1").bind(fp).run();
  }

  return json({ ok: true });
}

async function handleAdminDeleteDevice(request, env) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);

  let body;
  try { body = await request.json(); } catch { return json({ error: "bad_request" }, 400); }

  const fp = String(body.fingerprint || "").trim();
  if (!fp) return json({ error: "missing_fingerprint" }, 400);

  const now = new Date().toISOString();
  await Promise.all([
    env.DB.prepare("DELETE FROM device_checkins WHERE fingerprint = ?1").bind(fp).run(),
    env.DB.prepare(
      "INSERT INTO blocked_devices (fingerprint, blocked_at, reason) VALUES (?1, ?2, 'deleted from admin') ON CONFLICT(fingerprint) DO NOTHING"
    ).bind(fp, now).run(),
  ]);

  return json({ ok: true });
}

async function handleAdminDeleteLead(request, env) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);

  let body;
  try { body = await request.json(); } catch { return json({ error: "bad_request" }, 400); }

  const email = String(body.email || "").trim().toLowerCase();
  if (!email) return json({ error: "missing_email" }, 400);

  await Promise.all([
    env.DB.prepare("DELETE FROM download_tokens WHERE email = ?1").bind(email).run(),
    env.DB.prepare("DELETE FROM leads WHERE email = ?1").bind(email).run(),
  ]);

  return json({ ok: true });
}

async function handleAdminExport(request, env, type) {
  if (!await adminSessionCheck(request, env)) {
    const origin = new URL(request.url).origin;
    return Response.redirect(`${origin}/admin/login`, 302);
  }

  function csvRow(vals) {
    return vals.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",");
  }

  if (type === "devices") {
    const { results } = await env.DB.prepare(
      "SELECT fingerprint, hw_name, hw_model, chip, memory, cpu_cores, os_version, version, ip_country, city, region, first_seen, last_seen, checkin_count FROM device_checkins ORDER BY last_seen DESC"
    ).all();
    const header = csvRow(["fingerprint", "device", "board_id", "chip", "memory", "cpu_cores", "macos", "app_version", "country", "city", "region", "first_seen", "last_seen", "checkins"]);
    const rows = (results || []).map((r) =>
      csvRow([r.fingerprint, r.hw_name, r.hw_model, r.chip, r.memory, r.cpu_cores, r.os_version, r.version, r.ip_country, r.city, r.region, r.first_seen, r.last_seen, r.checkin_count])
    );
    const today = new Date().toISOString().slice(0, 10);
    return new Response([header, ...rows].join("\n"), {
      headers: {
        "content-type": "text/csv",
        "content-disposition": `attachment; filename="nomima-installs-${today}.csv"`,
        "cache-control": "no-store",
      },
    });
  }

  if (type === "leads") {
    const [{ results: leads }, { results: tokens }] = await Promise.all([
      env.DB.prepare("SELECT email, created_at, ip_country FROM leads ORDER BY created_at DESC").all(),
      env.DB.prepare("SELECT email, used_at FROM download_tokens WHERE used_at IS NOT NULL").all(),
    ]);
    const usedAt = {};
    for (const t of (tokens || [])) if (!usedAt[t.email]) usedAt[t.email] = t.used_at;
    const header = csvRow(["email", "country", "requested_at", "downloaded_at"]);
    const rows = (leads || []).map((r) => csvRow([r.email, r.ip_country, r.created_at, usedAt[r.email] || ""]));
    const today = new Date().toISOString().slice(0, 10);
    return new Response([header, ...rows].join("\n"), {
      headers: {
        "content-type": "text/csv",
        "content-disposition": `attachment; filename="nomima-leads-${today}.csv"`,
        "cache-control": "no-store",
      },
    });
  }

  return json({ error: "unknown_type" }, 400);
}

async function handleAdminDashboard(request, env) {
  if (!await adminSessionCheck(request, env)) {
    const origin = new URL(request.url).origin;
    return Response.redirect(`${origin}/admin/login`, 302);
  }
  const { checkins, blockedSet, leads, tokens } = await fetchAdminData(env);

  const totalInstalls = checkins.length;
  const totalBlocked = blockedSet.size;
  const totalLeads = leads.length;
  const totalDownloads = tokens.filter((t) => t.used_at).length;

  const fmt = (iso) => iso ? iso.replace("T", " ").slice(0, 16) + " UTC" : "—";
  const fp = (s) => s ? `${s.slice(0, 8)}…${s.slice(-4)}` : "—";

  function recencyBadge(iso) {
    if (!iso) return "—";
    const diffMs = Date.now() - new Date(iso).getTime();
    const diffH = diffMs / 3600000;
    if (diffH < 1)   return `<span class="badge-now">just now</span>`;
    if (diffH < 24)  return `<span class="badge-today">${Math.floor(diffH)}h ago</span>`;
    if (diffH < 168) return `<span class="badge-week">${Math.floor(diffH / 24)}d ago</span>`;
    return fmt(iso);
  }

  const checkinRows = checkins.map((r) => {
    const isBlocked = blockedSet.has(r.fingerprint);
    const action = isBlocked
      ? `<button class="btn-unrevoke" data-fp="${r.fingerprint}">Unrevoke</button>`
      : `<button class="btn-revoke" data-fp="${r.fingerprint}">Revoke</button>`;
    const del = `<button class="btn-delete" data-fp="${r.fingerprint}" title="Delete record and permanently revoke">Delete</button>`;
    const specs = [r.chip, r.memory, r.cpu_cores ? r.cpu_cores.replace(/ \(.*\)/, '') + ' cores' : null]
      .filter(Boolean).join(' · ');
    const deviceCell = (r.hw_name || r.hw_model)
      ? `<span class="device-name">${r.hw_name || r.hw_model}</span>` +
        (r.hw_model ? `<br><span class="device-id">${r.hw_model}</span>` : '') +
        (specs ? `<br><span class="device-specs">${specs}</span>` : '')
      : "—";
    const locationParts = [r.city, r.region, r.ip_country].filter(Boolean);
    const location = locationParts.length ? locationParts.join(", ") : "—";
    return `<tr class="${isBlocked ? "blocked-row" : ""}">
      <td class="mono" title="${r.fingerprint}">${fp(r.fingerprint)}</td>
      <td>${deviceCell}</td>
      <td>${r.os_version || "—"}</td>
      <td>${r.version || "—"}</td>
      <td>${location}</td>
      <td>${fmt(r.first_seen)}</td>
      <td>${recencyBadge(r.last_seen)}</td>
      <td class="num">${r.checkin_count}</td>
      <td>${isBlocked ? '<span class="badge-blocked">blocked</span>' : '<span class="badge-active">active</span>'}</td>
      <td class="action-cell">${action} ${del}</td>
    </tr>`;
  }).join("");

  const leadRows = leads.map((r) => {
    const used = tokens.find((t) => t.email === r.email && t.used_at);
    return `<tr>
      <td>${r.email}</td>
      <td>${r.ip_country || "—"}</td>
      <td>${fmt(r.created_at)}</td>
      <td>${used ? `<span class="badge-active">✓ ${fmt(used.used_at)}</span>` : '<span class="badge-pending">pending</span>'}</td>
      <td><button class="btn-delete-lead" data-email="${r.email}" title="Delete this lead and all their tokens">Delete</button></td>
    </tr>`;
  }).join("");

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nomima Admin</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #07070e; --surface: #0e0e1a; --border: rgba(99,102,241,0.18);
    --fg: #e0e0f0; --muted: #6a6a88; --accent: #6366f1;
    --red: #f87171; --green: #34d399; --yellow: #fbbf24;
    --font: -apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Helvetica,Arial,sans-serif;
  }
  body { background: var(--bg); color: var(--fg); font-family: var(--font); font-size: 13px; line-height: 1.5; padding: 24px; }
  h1 { font-size: 20px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 4px; }
  h2 { font-size: 14px; font-weight: 700; letter-spacing: -0.01em; margin: 28px 0 12px; color: var(--fg); }
  .subtitle { color: var(--muted); font-size: 12px; margin-bottom: 24px; }
  .cards { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 8px; }
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 16px 20px; min-width: 130px; }
  .card .num { font-size: 28px; font-weight: 800; letter-spacing: -0.04em; line-height: 1; }
  .card .lbl { font-size: 11px; color: var(--muted); margin-top: 4px; text-transform: uppercase; letter-spacing: 0.06em; }
  .card.accent .num { color: var(--accent); }
  .card.red .num { color: var(--red); }
  .card.green .num { color: var(--green); }
  .tbl-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; }
  table { width: 100%; border-collapse: collapse; }
  thead th { background: #12121e; color: var(--muted); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; padding: 10px 12px; text-align: left; white-space: nowrap; border-bottom: 1px solid var(--border); }
  tbody tr { border-bottom: 1px solid rgba(255,255,255,0.04); }
  tbody tr:last-child { border-bottom: none; }
  tbody tr:hover { background: rgba(255,255,255,0.025); }
  tbody tr.blocked-row { background: rgba(248,113,113,0.05); }
  td { padding: 9px 12px; vertical-align: middle; white-space: nowrap; }
  td.mono { font-family: monospace; font-size: 12px; color: var(--muted); cursor: default; }
  td.num { text-align: right; font-variant-numeric: tabular-nums; }
  .badge-active { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; background: rgba(52,211,153,0.12); border: 1px solid rgba(52,211,153,0.3); color: var(--green); }
  .badge-blocked { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; background: rgba(248,113,113,0.12); border: 1px solid rgba(248,113,113,0.3); color: var(--red); }
  .badge-pending { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: var(--muted); }
  button { padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; border: none; cursor: pointer; transition: opacity 0.15s; font-family: var(--font); }
  button:hover { opacity: 0.8; }
  .btn-revoke { background: rgba(248,113,113,0.15); color: var(--red); border: 1px solid rgba(248,113,113,0.3); }
  .btn-unrevoke { background: rgba(52,211,153,0.15); color: var(--green); border: 1px solid rgba(52,211,153,0.3); }
  .btn-delete, .btn-delete-lead { background: rgba(248,113,113,0.08); color: var(--red); border: 1px solid rgba(248,113,113,0.2); margin-left: 4px; opacity: 0.7; }
  .btn-delete:hover, .btn-delete-lead:hover { opacity: 1 !important; }
  .action-cell { white-space: nowrap; }
  .tbl-toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
  .tbl-toolbar h2 { margin: 0; }
  .btn-export { padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; border: 1px solid var(--border); cursor: pointer; background: transparent; color: var(--muted); font-family: var(--font); transition: color 0.15s, border-color 0.15s; }
  .btn-export:hover { color: var(--fg); border-color: rgba(99,102,241,0.4); }
  .device-name { font-weight: 600; color: var(--fg); }
  .device-id { font-family: monospace; font-size: 11px; color: var(--muted); }
  .device-specs { font-size: 11px; color: var(--muted); opacity: 0.8; }
  .badge-now   { display:inline-block;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.35);color:#a5b4fc; }
  .badge-today { display:inline-block;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600;background:rgba(52,211,153,0.10);border:1px solid rgba(52,211,153,0.25);color:var(--green); }
  .badge-week  { display:inline-block;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:600;background:rgba(251,191,36,0.10);border:1px solid rgba(251,191,36,0.25);color:var(--yellow); }
  #toast { position: fixed; bottom: 20px; right: 20px; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; background: var(--surface); border: 1px solid var(--border); display: none; z-index: 999; }
  #toast.show { display: block; }
  #toast.ok { border-color: rgba(52,211,153,0.4); color: var(--green); }
  #toast.err { border-color: rgba(248,113,113,0.4); color: var(--red); }
</style>
</head>
<body>
<div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:4px;">
  <h1>Nomima Admin</h1>
  <a href="/admin/logout" style="font-size:12px;color:var(--muted);text-decoration:none;">Sign out</a>
</div>
<p class="subtitle">Install telemetry &amp; access control</p>

<div class="cards">
  <div class="card accent"><div class="num">${totalInstalls}</div><div class="lbl">Installs</div></div>
  <div class="card red"><div class="num">${totalBlocked}</div><div class="lbl">Blocked</div></div>
  <div class="card"><div class="num">${totalLeads}</div><div class="lbl">Download requests</div></div>
  <div class="card green"><div class="num">${totalDownloads}</div><div class="lbl">Downloads used</div></div>
</div>

<div class="tbl-toolbar">
  <h2>Devices</h2>
  <a href="/admin/export/devices" class="btn-export">↓ Export CSV</a>
</div>
<div class="tbl-wrap">
  <table>
    <thead><tr><th>Fingerprint</th><th>Device</th><th>macOS</th><th>App ver</th><th>Location</th><th>First seen</th><th>Last active</th><th>Check-ins</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody id="device-tbody">${checkinRows || '<tr><td colspan="10" style="text-align:center;padding:24px;color:var(--muted)">No devices yet</td></tr>'}</tbody>
  </table>
</div>

<div class="tbl-toolbar" style="margin-top:28px;">
  <h2>Download requests</h2>
  <a href="/admin/export/leads" class="btn-export">↓ Export CSV</a>
</div>
<div class="tbl-wrap">
  <table>
    <thead><tr><th>Email</th><th>Country</th><th>Requested</th><th>Downloaded</th><th></th></tr></thead>
    <tbody>${leadRows || '<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--muted)">No requests yet</td></tr>'}</tbody>
  </table>
</div>

<div id="toast"></div>

<script>
function toast(msg, ok) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'show ' + (ok ? 'ok' : 'err');
  setTimeout(() => t.className = '', 2800);
}

async function apiPost(path, body) {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.btn-revoke, .btn-unrevoke, .btn-delete, .btn-delete-lead');
  if (!btn) return;

  // Device revoke / unrevoke
  if (btn.classList.contains('btn-revoke') || btn.classList.contains('btn-unrevoke')) {
    const fp = btn.dataset.fp;
    const revoke = btn.classList.contains('btn-revoke');
    btn.disabled = true;
    try {
      const data = await apiPost('/admin/' + (revoke ? 'revoke' : 'unrevoke'), { fingerprint: fp });
      if (data.ok) { toast(revoke ? 'Device revoked' : 'Device unrevoked', true); setTimeout(() => location.reload(), 800); }
      else { toast('Error: ' + (data.error || 'unknown'), false); btn.disabled = false; }
    } catch { toast('Network error', false); btn.disabled = false; }
    return;
  }

  // Device delete (+ auto-revoke)
  if (btn.classList.contains('btn-delete')) {
    const fp = btn.dataset.fp;
    if (!confirm('Delete this install record and permanently revoke the device?\n\n' + fp)) return;
    btn.disabled = true;
    try {
      const data = await apiPost('/admin/delete-device', { fingerprint: fp });
      if (data.ok) { toast('Device deleted and revoked', true); setTimeout(() => location.reload(), 800); }
      else { toast('Error: ' + (data.error || 'unknown'), false); btn.disabled = false; }
    } catch { toast('Network error', false); btn.disabled = false; }
    return;
  }

  // Lead delete
  if (btn.classList.contains('btn-delete-lead')) {
    const email = btn.dataset.email;
    if (!confirm('Delete all records for ' + email + '?\n\nThis removes the lead and all their download tokens.')) return;
    btn.disabled = true;
    try {
      const data = await apiPost('/admin/delete-lead', { email });
      if (data.ok) { toast('Lead deleted', true); setTimeout(() => location.reload(), 800); }
      else { toast('Error: ' + (data.error || 'unknown'), false); btn.disabled = false; }
    } catch { toast('Network error', false); btn.disabled = false; }
    return;
  }
});
</script>
</body></html>`;

  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}

// ─── Email helpers ───────────────────────────────────────────────────────────

const EMAIL_FROM = "Nomima <hello@nomima.io>";
const EMAIL_REPLY_TO = "support@nomima.io";

async function sendDownloadEmail(env, email, link, origin) {
  if (!env.RESEND_API_KEY) {
    console.log(`[email stub — no RESEND_API_KEY] ${email}: ${link}`);
    return;
  }
  const guideUrl = `${origin}/docs/`;
  const logoUrl = `${origin}/email-logo.png`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [email],
        reply_to: EMAIL_REPLY_TO,
        subject: "Welcome to Nomima — your download link",
        html: welcomeEmailHtml({ downloadUrl: link, guideUrl, logoUrl }),
        text: welcomeEmailText({ downloadUrl: link, guideUrl }),
      }),
    });
    if (!res.ok) {
      console.log(`[email] resend ${res.status}: ${(await res.text()).slice(0, 300)}`);
    }
  } catch (e) {
    console.log(`[email] send failed: ${e}`);
  }
}

function welcomeEmailText({ downloadUrl, guideUrl }) {
  return [
    "Welcome to Nomima",
    "",
    "Thanks for joining. Your private, offline notebook is ready — download it here:",
    downloadUrl,
    "",
    "This link is personal, works once, and expires in 24 hours. Apple Silicon · macOS 13+.",
    "",
    "New to Nomima? The User Guide walks you through Smart Tags, the knowledge graph, and more:",
    guideUrl,
    "",
    "© 2026 Nomima · Private. Offline. Yours.",
  ].join("\n");
}

function welcomeEmailHtml({ downloadUrl, guideUrl, logoUrl }) {
  const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Helvetica,Arial,sans-serif";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <style>
    @media (max-width:600px) {
      .email-card { border-radius:0 !important; }
      .email-body { padding:28px 20px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#07070e;-webkit-font-smoothing:antialiased;" bgcolor="#07070e">
  <!-- Preview text -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;color:#07070e;">Your Nomima download link — works once, expires in 24 hours.</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#07070e;padding:40px 16px 48px;" bgcolor="#07070e">
    <tr><td align="center" bgcolor="#07070e">
      <table role="presentation" class="email-card" width="100%" cellpadding="0" cellspacing="0"
        style="max-width:460px;background:#0e0e1a;border-radius:20px;border:1px solid rgba(99,102,241,0.22);box-shadow:0 0 0 1px rgba(99,102,241,0.10);" bgcolor="#0e0e1a">

        <!-- Header: N mark + wordmark -->
        <tr><td style="padding:32px 36px 20px;background-color:#0e0e1a;" bgcolor="#0e0e1a">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td valign="middle" style="padding-right:14px;">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTInIGhlaWdodD0nNTInIHZpZXdCb3g9JzAgMCAxMDI0IDEwMjQnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdubCcgeDE9JzMxMicgeTE9Jzk3JyB4Mj0nMzEyJyB5Mj0nOTI3JyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PHN0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPScjN2M2ZmY3Jy8+PHN0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPScjNWE3MmY1Jy8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9J25yJyB4MT0nNzEyJyB5MT0nOTcnIHgyPSc3MTInIHkyPSc5MjcnIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNmZjRkYjAnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNhMDQwZDAnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48bGluZSB4MT0nMzEyJyB5MT0nMjAwJyB4Mj0nMzEyJyB5Mj0nODI0JyBzdHJva2U9J3VybCgjbmwpJyBzdHJva2Utd2lkdGg9JzIwNScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+PGxpbmUgeDE9JzcxMicgeTE9JzIwMCcgeDI9JzcxMicgeTI9JzgyNCcgc3Ryb2tlPSd1cmwoI25yKScgc3Ryb2tlLXdpZHRoPScyMDUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjxsaW5lIHgxPSczMTInIHkxPScyMDAnIHgyPSc3MTInIHkyPSc4MjQnIHN0cm9rZT0nIzZhM2NjNCcgc3Ryb2tlLXdpZHRoPScyMDUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgb3BhY2l0eT0nMC42Jy8+PC9zdmc+"
                   width="52" height="52" alt="Nomima" style="display:block;border:0;outline:none;">
            </td>
            <td valign="middle">
              <span style="font-family:${FONT};font-size:24px;font-weight:800;letter-spacing:-0.03em;color:#ffffff;">Nomima</span>
            </td>
          </tr></table>
        </td></tr>

        <!-- Body -->
        <tr><td class="email-body" style="padding:4px 36px 32px;font-family:${FONT};" bgcolor="#0e0e1a">

          <!-- Greeting -->
          <h1 style="margin:0 0 8px;font-size:20px;font-weight:800;letter-spacing:-0.02em;color:#f0f0fa;">Welcome to Nomima 👋</h1>
          <p style="margin:0 0 22px;font-size:13.5px;line-height:1.7;color:#7a7a9a;">Your next great notebook is a few clicks away.</p>

          <!-- Task checklist -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 26px;" bgcolor="#13131f">
            <tr><td style="background-color:#13131f;border:1px solid rgba(99,102,241,0.18);border-radius:12px;padding:6px 18px 14px;" bgcolor="#13131f">
              <p style="margin:0;padding:12px 0 8px;font-size:11px;font-weight:700;color:#5a5a7a;letter-spacing:0.06em;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,0.05);">Getting started checklist</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;"><tr>
                <td width="20" valign="top" style="padding-top:1px;"><div style="width:14px;height:14px;border-radius:4px;border:1.5px solid rgba(99,102,241,0.4);font-size:0;">&nbsp;</div></td>
                <td style="padding-left:10px;font-size:13px;line-height:1.55;color:#b0b0cc;">Get to know <span style="display:inline-block;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(96,165,250,0.12);border:1px solid rgba(96,165,250,0.28);color:#60A5FA;">@Nomima</span> — start with the Welcome notebook</td>
              </tr></table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;"><tr>
                <td width="20" valign="top" style="padding-top:1px;"><div style="width:14px;height:14px;border-radius:4px;border:1.5px solid rgba(99,102,241,0.4);font-size:0;">&nbsp;</div></td>
                <td style="padding-left:10px;font-size:13px;line-height:1.55;color:#b0b0cc;">Read the <a href="${guideUrl}" style="display:inline-block;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(45,212,191,0.12);border:1px solid rgba(45,212,191,0.28);color:#2DD4BF;text-decoration:none;">User Guide →</a> — five minutes, everything clicks</td>
              </tr></table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;"><tr>
                <td width="20" valign="top" style="padding-top:1px;"><div style="width:14px;height:14px;border-radius:4px;border:1.5px solid rgba(99,102,241,0.4);font-size:0;">&nbsp;</div></td>
                <td style="padding-left:10px;font-size:13px;line-height:1.55;color:#b0b0cc;">Check out the templates — <span style="display:inline-block;padding:1px 8px;border-radius:6px;font-size:12px;font-weight:600;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.13);color:#c0c0d8;font-family:monospace;">⌘K</span> is your best friend</td>
              </tr></table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;"><tr>
                <td width="20" valign="top" style="padding-top:1px;"><div style="width:14px;height:14px;border-radius:4px;border:1.5px solid rgba(99,102,241,0.4);font-size:0;">&nbsp;</div></td>
                <td style="padding-left:10px;font-size:13px;line-height:1.55;color:#b0b0cc;">Try tagging something with <span style="display:inline-block;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.26);color:#8b8df5;">#ideas</span> — watch the graph light up</td>
              </tr></table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;"><tr>
                <td width="20" valign="top" style="padding-top:1px;"><div style="width:14px;height:14px;border-radius:4px;border:1.5px solid rgba(99,102,241,0.4);font-size:0;">&nbsp;</div></td>
                <td style="padding-left:10px;font-size:13px;line-height:1.55;color:#b0b0cc;">Set your first reminder — add <span style="display:inline-block;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(232,121,249,0.12);border:1px solid rgba(232,121,249,0.22);color:#E879F9;">June 20</span> to any note and it just works</td>
              </tr></table>
            </td></tr>
          </table>

          <!-- Download button -->
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 10px;">
            <tr>
              <td style="border-radius:999px;background:linear-gradient(135deg,#6366f1,#f048a8);" bgcolor="#6366f1">
                <a href="${downloadUrl}" style="display:inline-block;padding:11px 28px;font-family:${FONT};font-size:13.5px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:999px;letter-spacing:-0.01em;">↓&nbsp;&nbsp;Download Nomima</a>
              </td>
            </tr>
          </table>
          <p style="margin:0 0 28px;font-size:11px;line-height:1.5;color:#44445a;">Personal link · works once · expires in 24 h · Apple Silicon · macOS 13+</p>

          <!-- Divider -->
          <div style="height:1px;background-color:#1e1e2e;margin-bottom:22px;"></div>

          <!-- Guide -->
          <p style="margin:0 0 5px;font-size:13px;font-weight:700;color:#c0c0e0;">New to Nomima?</p>
          <p style="margin:0 0 12px;font-size:13px;line-height:1.62;color:#6a6a88;">The User Guide walks you through Smart Tags, the knowledge graph, and reminders — five minutes to get the most out of it from day one.</p>
          <a href="${guideUrl}" style="font-family:${FONT};font-size:13px;font-weight:600;color:#8b8df5;text-decoration:none;">Read the User Guide →</a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 36px;border-top:1px solid rgba(255,255,255,0.05);text-align:center;background-color:#0a0a14;" bgcolor="#0a0a14">
          <p style="margin:0;font-family:${FONT};font-size:11px;color:#35354a;line-height:1.6;">
            © 2026 Nomima · Private. Offline. Yours.<br>
            You received this because you requested a download at <a href="https://nomima.io" style="color:#4a4a7a;text-decoration:none;">nomima.io</a>.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}
