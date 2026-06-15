// Nomima landing — Cloudflare Worker.
//
// Serves the static marketing site (via the ASSETS binding) AND a small backend:
//   POST /api/request-download  → store the lead, mint a per-email token, email the link
//   GET  /get?t=<token>         → validate the token (unexpired), 302 → DMG
//   POST /access                → device check-in (fingerprint + version) + access gate response
//   GET  /admin                 → dashboard (redirects to /admin/login if not authenticated)
//   GET  /admin/login           → login form
//   POST /admin/login           → verify credentials, set session cookie, redirect to /admin
//   GET  /admin/logout          → clear session cookie, redirect to /admin/login
//   POST /admin/revoke          → block a device fingerprint (session-authenticated)
//   POST /admin/unrevoke        → unblock a device fingerprint (session-authenticated)
//   GET  /admin/data            → JSON data for dashboard (session-authenticated)
//
// The DMG itself stays on GitHub Releases; its URL is only ever handed out after a
// valid token redemption (never linked on the site). The token is reusable within
// its validity window — a single-use link breaks on double-clicks and on the link
// scanners many mail providers run, both of which would burn it before the human.
//
// Secrets (set via `wrangler secret put`):
//   ADMIN_USER   — login username
//   ADMIN_PASS   — login password (also used as HMAC session-signing key)

const TOKEN_TTL_HOURS = 24 * 30; // 30 days
const FALLBACK_DMG = "https://github.com/nomima-app/Nomima-landing/releases/latest";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Apple model identifier → human marketing name (with the real screen size).
// system_profiler only reports the generic "MacBook Pro"/"MacBook Air"; the size
// lives in the identifier (e.g. Mac15,12 = 13-inch — the "15" is the chip
// generation, NOT the screen size). Resolving it here fixes the dashboard for
// every already-installed device with no app rebuild. Falls back to the raw id.
const MODEL_NAMES = {
  // MacBook Air
  "MacBookAir10,1": "MacBook Air (13-inch, M1, 2020)",
  "Mac14,2":  "MacBook Air (13-inch, M2, 2022)",
  "Mac14,15": "MacBook Air (15-inch, M2, 2023)",
  "Mac15,12": "MacBook Air (13-inch, M3, 2024)",
  "Mac15,13": "MacBook Air (15-inch, M3, 2024)",
  "Mac16,12": "MacBook Air (13-inch, M4, 2025)",
  "Mac16,13": "MacBook Air (15-inch, M4, 2025)",
  // MacBook Pro 13"
  "MacBookPro17,1": "MacBook Pro (13-inch, M1, 2020)",
  "Mac14,7":  "MacBook Pro (13-inch, M2, 2022)",
  // MacBook Pro 14" / 16"
  "MacBookPro18,3": "MacBook Pro (14-inch, M1 Pro, 2021)",
  "MacBookPro18,4": "MacBook Pro (14-inch, M1 Max, 2021)",
  "MacBookPro18,1": "MacBook Pro (16-inch, M1 Pro, 2021)",
  "MacBookPro18,2": "MacBook Pro (16-inch, M1 Max, 2021)",
  "Mac14,9":  "MacBook Pro (14-inch, M2 Pro, 2023)",
  "Mac14,5":  "MacBook Pro (14-inch, M2 Max, 2023)",
  "Mac14,10": "MacBook Pro (16-inch, M2 Pro, 2023)",
  "Mac14,6":  "MacBook Pro (16-inch, M2 Max, 2023)",
  "Mac15,3":  "MacBook Pro (14-inch, M3, 2023)",
  "Mac15,6":  "MacBook Pro (14-inch, M3 Pro, 2023)",
  "Mac15,8":  "MacBook Pro (14-inch, M3 Max, 2023)",
  "Mac15,10": "MacBook Pro (14-inch, M3 Max, 2023)",
  "Mac15,7":  "MacBook Pro (16-inch, M3 Pro, 2023)",
  "Mac15,9":  "MacBook Pro (16-inch, M3 Max, 2023)",
  "Mac15,11": "MacBook Pro (16-inch, M3 Max, 2023)",
  "Mac16,1":  "MacBook Pro (14-inch, M4, 2024)",
  "Mac16,6":  "MacBook Pro (14-inch, M4 Pro, 2024)",
  "Mac16,8":  "MacBook Pro (14-inch, M4 Max, 2024)",
  "Mac16,7":  "MacBook Pro (16-inch, M4 Pro, 2024)",
  "Mac16,5":  "MacBook Pro (16-inch, M4 Max, 2024)",
  // Mac mini
  "Macmini9,1": "Mac mini (M1, 2020)",
  "Mac14,3":  "Mac mini (M2, 2023)",
  "Mac14,12": "Mac mini (M2 Pro, 2023)",
  "Mac16,10": "Mac mini (M4, 2024)",
  "Mac16,11": "Mac mini (M4 Pro, 2024)",
  // iMac (24")
  "iMac21,1": "iMac (24-inch, M1, 2021)",
  "iMac21,2": "iMac (24-inch, M1, 2021)",
  "Mac15,4":  "iMac (24-inch, M3, 2023)",
  "Mac15,5":  "iMac (24-inch, M3, 2023)",
  "Mac16,3":  "iMac (24-inch, M4, 2024)",
  // Mac Studio / Mac Pro
  "Mac13,1":  "Mac Studio (M1 Max, 2022)",
  "Mac13,2":  "Mac Studio (M1 Ultra, 2022)",
  "Mac14,13": "Mac Studio (M2 Max, 2023)",
  "Mac14,14": "Mac Studio (M2 Ultra, 2023)",
  "Mac15,14": "Mac Studio (M3 Ultra, 2025)",
  "Mac16,9":  "Mac Studio (M4 Max, 2025)",
  "Mac14,8":  "Mac Pro (M2 Ultra, 2023)",
};

function modelMarketingName(model) {
  return model ? (MODEL_NAMES[model] || null) : null;
}

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
    if (path === "/api/report-bug" && request.method === "POST") {
      return handleReportBug(request, env);
    }
    if (path === "/api/bugs/public") {
      return handlePublicBugs(request, env);
    }
    if (path.startsWith("/admin/bugs/img/")) {
      return handleAdminBugImage(request, env, decodeURIComponent(path.slice("/admin/bugs/img/".length)));
    }
    if (path.startsWith("/admin/bugs/diag/")) {
      return handleAdminBugDiag(request, env, path.slice("/admin/bugs/diag/".length));
    }
    if (path === "/admin/bugs/status" && request.method === "POST") {
      return handleAdminBugStatus(request, env);
    }
    if (path === "/admin/bugs/hide" && request.method === "POST") {
      return handleAdminBugHide(request, env);
    }
    if (path === "/admin/bugs/delete" && request.method === "POST") {
      return handleAdminBugDelete(request, env);
    }
    if (path === "/admin/export/bugs") {
      return handleAdminExport(request, env, "bugs");
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
  if (!row || new Date(row.expires_at) < now) {
    return Response.redirect(`${url.origin}/?link=expired#get`, 302);
  }

  // Record first use (for analytics) but allow re-download within the window:
  // the link stays valid until it expires, so double-clicks and mail link-scanners
  // can't kill it.
  if (!row.used_at) {
    await env.DB.prepare(
      "UPDATE download_tokens SET used_at = ?1 WHERE token = ?2 AND used_at IS NULL",
    )
      .bind(now.toISOString(), token)
      .run();
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

// ─── /api/report-bug + bug triage ────────────────────────────────────────────

const SEVERITIES   = new Set(["low", "medium", "high", "crash"]);
const BUG_STATUSES = new Set(["new", "triaged", "confirmed", "in-progress", "fixed", "wontfix"]);
const IMG_TYPES    = new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
const MAX_BUGS = 10, MAX_IMG_PER_BUG = 4, MAX_IMG_BYTES = 5 * 1024 * 1024;
const RL_MAX = 8, RL_WINDOW_MS = 10 * 60 * 1000; // 8 submissions / 10 min per key

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

async function sha256Hex(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Fixed-window rate limit (best-effort; races are harmless at this scale).
async function rateLimitOk(env, key) {
  const now = Date.now();
  const row = await env.DB.prepare("SELECT window_start, count FROM bug_rate WHERE key = ?1").bind(key).first();
  if (!row) {
    await env.DB.prepare(
      "INSERT INTO bug_rate (key, window_start, count) VALUES (?1, ?2, 1) ON CONFLICT(key) DO UPDATE SET window_start = ?2, count = 1"
    ).bind(key, new Date(now).toISOString()).run();
    return true;
  }
  if (now - new Date(row.window_start).getTime() > RL_WINDOW_MS) {
    await env.DB.prepare("UPDATE bug_rate SET window_start = ?2, count = 1 WHERE key = ?1").bind(key, new Date(now).toISOString()).run();
    return true;
  }
  if (row.count >= RL_MAX) return false;
  await env.DB.prepare("UPDATE bug_rate SET count = count + 1 WHERE key = ?1").bind(key).run();
  return true;
}

async function handleReportBug(request, env) {
  let fd;
  try { fd = await request.formData(); } catch { return json({ error: "bad_request" }, 400); }

  // Honeypot — a hidden field bots tend to fill. Pretend success; persist nothing.
  if (String(fd.get("company") || "").trim()) return json({ ok: true, count: 0 });

  let payload;
  try { payload = JSON.parse(String(fd.get("payload") || "")); } catch { return json({ error: "bad_payload" }, 400); }

  const bugs = Array.isArray(payload.bugs) ? payload.bugs : [];
  if (bugs.length < 1 || bugs.length > MAX_BUGS) return json({ error: "invalid_bug_count" }, 400);

  const source = payload.source === "app" ? "app" : "web";
  const fingerprint = source === "app" ? String(payload.fingerprint || "").trim().slice(0, 128) : null;
  const ip = request.headers.get("cf-connecting-ip") || "";
  const country = request.headers.get("cf-ipcountry") || null;

  if (source === "app" && fingerprint) {
    const blocked = await env.DB.prepare("SELECT 1 FROM blocked_devices WHERE fingerprint = ?1").bind(fingerprint).first();
    if (blocked) return json({ error: "blocked" }, 403);
  }
  const rlKey = source === "app" && fingerprint ? "fp:" + fingerprint : "ip:" + (await sha256Hex(ip)).slice(0, 32);
  if (!(await rateLimitOk(env, rlKey))) return json({ error: "rate_limited" }, 429);

  const clean = [];
  for (const b of bugs) {
    const title = String(b.title || "").trim().slice(0, 200);
    const description = String(b.description || "").trim().slice(0, 8000);
    if (!title || !description) return json({ error: "missing_fields" }, 400);
    clean.push({
      title,
      description,
      severity: SEVERITIES.has(b.severity) ? b.severity : "medium",
      area: b.area ? String(b.area).trim().slice(0, 80) : null,
    });
  }

  const email = payload.email ? String(payload.email).trim().toLowerCase().slice(0, 254) : null;
  const env_ = payload.env || {};
  const appVersion = env_.appVersion ? String(env_.appVersion).slice(0, 32) : null;
  const os = env_.os ? String(env_.os).slice(0, 64) : (env_.osVersion ? String(env_.osVersion).slice(0, 64) : null);
  const now = new Date().toISOString();
  const batchId = crypto.randomUUID();

  // Diagnostics blob (shared by every bug in the batch) → R2.
  let diagKey = null;
  if (payload.diagnostics && typeof payload.diagnostics === "object") {
    diagKey = `bugs/${batchId}/diagnostics.json`;
    await env.BUGS.put(
      diagKey,
      JSON.stringify({ env: env_, diagnostics: payload.diagnostics, fingerprint }),
      { httpMetadata: { contentType: "application/json" } },
    );
  }

  const ids = [];
  for (const b of clean) {
    const id = crypto.randomUUID();
    ids.push(id);
    await env.DB.prepare(
      "INSERT INTO bug_reports (id,batch_id,source,fingerprint,title,description,severity,area,email,app_version,os,ip_country,status,public_hidden,diagnostics_key,created_at) " +
      "VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10,?11,?12,'new',0,?13,?14)"
    ).bind(id, batchId, source, fingerprint, b.title, b.description, b.severity, b.area, email, appVersion, os, country, diagKey, now).run();
  }

  // Screenshots arrive as multipart parts named img_<bugIndex>_<n>.
  let attCount = 0;
  for (const [name, val] of fd.entries()) {
    const m = /^img_(\d+)_\d+$/.exec(name);
    if (!m || typeof val === "string") continue;
    const bugIdx = Number(m[1]);
    if (!(bugIdx >= 0 && bugIdx < ids.length)) continue;
    if (!IMG_TYPES.has(val.type) || val.size > MAX_IMG_BYTES) continue;
    if (attCount >= MAX_BUGS * MAX_IMG_PER_BUG) break;
    const attId = crypto.randomUUID();
    const ext = (val.type.split("/")[1] || "png").replace("jpeg", "jpg");
    const key = `bugs/${batchId}/${ids[bugIdx]}/${attId}.${ext}`;
    await env.BUGS.put(key, await val.arrayBuffer(), { httpMetadata: { contentType: val.type } });
    await env.DB.prepare(
      "INSERT INTO bug_attachments (id,bug_id,r2_key,filename,content_type,size,created_at) VALUES (?1,?2,?3,?4,?5,?6,?7)"
    ).bind(attId, ids[bugIdx], key, String(val.name || "screenshot").slice(0, 200), val.type, val.size, now).run();
    attCount++;
  }

  return json({ ok: true, count: ids.length });
}

// Public read-only board feed — public-safe fields only.
async function handlePublicBugs(request, env) {
  const { results } = await env.DB.prepare(
    "SELECT id, title, severity, status, created_at, updated_at FROM bug_reports WHERE public_hidden = 0 ORDER BY created_at DESC LIMIT 200"
  ).all();
  return new Response(JSON.stringify({ bugs: results || [] }), {
    headers: { "content-type": "application/json", "cache-control": "public, max-age=30" },
  });
}

async function handleAdminBugImage(request, env, key) {
  if (!await adminSessionCheck(request, env)) return new Response("unauthorized", { status: 401 });
  if (!key.startsWith("bugs/")) return new Response("not found", { status: 404 });
  const obj = await env.BUGS.get(key);
  if (!obj) return new Response("not found", { status: 404 });
  return new Response(obj.body, {
    headers: {
      "content-type": obj.httpMetadata?.contentType || "application/octet-stream",
      "cache-control": "private, max-age=300",
    },
  });
}

// Detail payload for the admin expand row: full description, screenshots, diagnostics.
async function handleAdminBugDiag(request, env, id) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);
  const row = await env.DB.prepare("SELECT diagnostics_key, description, admin_notes FROM bug_reports WHERE id = ?1").bind(id).first();
  if (!row) return json({ error: "not_found" }, 404);
  let diagnostics = null;
  if (row.diagnostics_key) {
    const obj = await env.BUGS.get(row.diagnostics_key);
    if (obj) { try { diagnostics = JSON.parse(await obj.text()); } catch { /* ignore */ } }
  }
  const { results: atts } = await env.DB.prepare("SELECT r2_key, filename FROM bug_attachments WHERE bug_id = ?1").bind(id).all();
  return json({ description: row.description, admin_notes: row.admin_notes, diagnostics, attachments: atts || [] });
}

async function handleAdminBugStatus(request, env) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);
  let body; try { body = await request.json(); } catch { return json({ error: "bad_request" }, 400); }
  const id = String(body.id || "").trim();
  const status = String(body.status || "").trim();
  if (!id || !BUG_STATUSES.has(status)) return json({ error: "bad_request" }, 400);
  const notes = body.notes != null ? String(body.notes).slice(0, 2000) : null;
  await env.DB.prepare("UPDATE bug_reports SET status = ?2, admin_notes = COALESCE(?3, admin_notes), updated_at = ?4 WHERE id = ?1")
    .bind(id, status, notes, new Date().toISOString()).run();
  return json({ ok: true });
}

async function handleAdminBugHide(request, env) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);
  let body; try { body = await request.json(); } catch { return json({ error: "bad_request" }, 400); }
  const id = String(body.id || "").trim();
  if (!id) return json({ error: "bad_request" }, 400);
  await env.DB.prepare("UPDATE bug_reports SET public_hidden = ?2, updated_at = ?3 WHERE id = ?1")
    .bind(id, body.hidden ? 1 : 0, new Date().toISOString()).run();
  return json({ ok: true });
}

async function handleAdminBugDelete(request, env) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);
  let body; try { body = await request.json(); } catch { return json({ error: "bad_request" }, 400); }
  const id = String(body.id || "").trim();
  if (!id) return json({ error: "bad_request" }, 400);
  const row = await env.DB.prepare("SELECT diagnostics_key FROM bug_reports WHERE id = ?1").bind(id).first();
  const { results: atts } = await env.DB.prepare("SELECT r2_key FROM bug_attachments WHERE bug_id = ?1").bind(id).all();
  for (const a of (atts || [])) { try { await env.BUGS.delete(a.r2_key); } catch { /* ignore */ } }
  await env.DB.prepare("DELETE FROM bug_attachments WHERE bug_id = ?1").bind(id).run();
  await env.DB.prepare("DELETE FROM bug_reports WHERE id = ?1").bind(id).run();
  // Drop the shared diagnostics blob only if no sibling bug still references it.
  if (row && row.diagnostics_key) {
    const sib = await env.DB.prepare("SELECT 1 FROM bug_reports WHERE diagnostics_key = ?1 LIMIT 1").bind(row.diagnostics_key).first();
    if (!sib) { try { await env.BUGS.delete(row.diagnostics_key); } catch { /* ignore */ } }
  }
  return json({ ok: true });
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
      // `Secure` only on https — over plain http (local `wrangler dev`) browsers
      // refuse to store a Secure cookie, which would silently break the session.
      "Set-Cookie": `${SESSION_COOKIE}=${expires}:${hmac}; HttpOnly; SameSite=Strict; Path=/${cookieSecure(request)}; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}`,
      "cache-control": "no-store",
    },
  });
}

function cookieSecure(request) {
  return new URL(request.url).protocol === "https:" ? "; Secure" : "";
}

function handleAdminLogout(request) {
  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/admin/login",
      "Set-Cookie": `${SESSION_COOKIE}=; HttpOnly; SameSite=Strict; Path=/${cookieSecure(request)}; Max-Age=0`,
      "cache-control": "no-store",
    },
  });
}

async function fetchAdminData(env) {
  const [checkins, blocked, leads, tokens, bugs] = await Promise.all([
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
    env.DB.prepare(
      "SELECT b.id, b.batch_id, b.source, b.title, b.description, b.severity, b.area, b.email, b.app_version, b.os, b.ip_country, b.status, b.public_hidden, b.admin_notes, b.diagnostics_key, b.created_at, b.updated_at, " +
      "(SELECT COUNT(*) FROM bug_attachments a WHERE a.bug_id = b.id) AS att_count FROM bug_reports b ORDER BY b.created_at DESC LIMIT 500"
    ).all(),
  ]);
  const blockedSet = new Set((blocked.results || []).map((r) => r.fingerprint));
  return { checkins: checkins.results || [], blockedSet, leads: leads.results || [], tokens: tokens.results || [], bugs: bugs.results || [] };
}

async function handleAdminData(request, env) {
  if (!await adminSessionCheck(request, env)) return json({ error: "unauthorized" }, 401);
  const { checkins, blockedSet, leads, tokens, bugs } = await fetchAdminData(env);
  const checkinsWithStatus = checkins.map((r) => ({ ...r, blocked: blockedSet.has(r.fingerprint) }));
  return json({ checkins: checkinsWithStatus, leads, tokens, bugs });
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
    const header = csvRow(["fingerprint", "device", "model", "board_id", "chip", "memory", "cpu_cores", "macos", "app_version", "country", "city", "region", "first_seen", "last_seen", "checkins"]);
    const rows = (results || []).map((r) =>
      csvRow([r.fingerprint, r.hw_name, modelMarketingName(r.hw_model) || r.hw_name || r.hw_model, r.hw_model, r.chip, r.memory, r.cpu_cores, r.os_version, r.version, r.ip_country, r.city, r.region, r.first_seen, r.last_seen, r.checkin_count])
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

  if (type === "bugs") {
    const { results } = await env.DB.prepare(
      "SELECT created_at, status, severity, title, description, app_version, os, email, source, public_hidden, area FROM bug_reports ORDER BY created_at DESC"
    ).all();
    const header = csvRow(["reported_at", "status", "severity", "title", "description", "app_version", "os", "email", "source", "hidden", "area"]);
    const rows = (results || []).map((r) =>
      csvRow([r.created_at, r.status, r.severity, r.title, r.description, r.app_version, r.os, r.email, r.source, r.public_hidden ? "yes" : "", r.area]));
    const today = new Date().toISOString().slice(0, 10);
    return new Response([header, ...rows].join("\n"), {
      headers: {
        "content-type": "text/csv",
        "content-disposition": `attachment; filename="nomima-bugs-${today}.csv"`,
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
  const { checkins, blockedSet, leads, tokens, bugs } = await fetchAdminData(env);

  const totalInstalls = checkins.length;
  const totalBlocked = blockedSet.size;
  const totalLeads = leads.length;
  const totalDownloads = tokens.filter((t) => t.used_at).length;
  const openBugs = bugs.filter((b) => b.status !== "fixed" && b.status !== "wontfix").length;

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
    const friendly = modelMarketingName(r.hw_model) || r.hw_name || r.hw_model;
    const deviceCell = friendly
      ? `<span class="device-name">${friendly}</span>` +
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

  const SEV_COLORS = { low: "#9aa0b0", medium: "#fbbf24", high: "#f97316", crash: "#f87171" };
  const bugRows = bugs.map((b) => {
    const sev = b.severity || "medium";
    const sc = SEV_COLORS[sev] || "#9aa0b0";
    const statusOpts = [...BUG_STATUSES].map((s) =>
      `<option value="${s}"${s === b.status ? " selected" : ""}>${s}</option>`).join("");
    const extras = [
      b.att_count ? `<button class="btn-detail" data-id="${b.id}">${b.att_count} 📷</button>` : "",
      b.diagnostics_key ? `<button class="btn-detail" data-id="${b.id}">▸ diag</button>` : "",
    ].filter(Boolean).join(" ") || '<span style="color:var(--muted)">—</span>';
    return `<tr data-id="${b.id}"${b.public_hidden ? ' class="hidden-row"' : ""}>
      <td>${fmt(b.created_at)}</td>
      <td><div class="bug-title">${esc(b.title)}</div><div class="bug-desc">${esc((b.description || "").slice(0, 120))}</div></td>
      <td><span class="sev" style="color:${sc};border-color:${sc}66">${sev}</span></td>
      <td><select class="sel-status" data-id="${b.id}">${statusOpts}</select></td>
      <td>${esc(b.app_version || "—")}<br><span class="device-specs">${esc(b.os || "")}${b.source === "web" ? " · web" : ""}</span></td>
      <td>${b.email ? esc(b.email) : '<span style="color:var(--muted)">—</span>'}</td>
      <td class="action-cell">${extras}</td>
      <td class="action-cell"><button class="btn-hide" data-id="${b.id}" data-hidden="${b.public_hidden ? 1 : 0}">${b.public_hidden ? "Show" : "Hide"}</button><button class="btn-bug-del" data-id="${b.id}">Delete</button></td>
    </tr>
    <tr class="detail-row" id="detail-${b.id}" style="display:none"><td colspan="8"><div class="bug-detail" id="detailbox-${b.id}"></div></td></tr>`;
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
  .card.yellow .num { color: var(--yellow); }
  .tabs { display: flex; gap: 2px; margin: 24px 0 18px; border-bottom: 1px solid var(--border); }
  .tabs .tab { background: transparent; border: none; border-bottom: 2px solid transparent; border-radius: 0; color: var(--muted); font-family: var(--font); font-size: 13px; font-weight: 600; padding: 9px 15px; cursor: pointer; display: flex; align-items: center; gap: 7px; }
  .tabs .tab:hover { color: var(--fg); opacity: 1; }
  .tabs .tab.active { color: var(--fg); border-bottom-color: var(--accent); }
  .tab-count { font-size: 11px; font-weight: 700; color: var(--muted); background: rgba(255,255,255,0.05); border-radius: 999px; padding: 1px 7px; }
  .tab.active .tab-count { color: var(--accent); background: rgba(99,102,241,0.14); }
  .tab-panel { display: none; }
  .tab-panel.active { display: block; }
  .bug-title { font-weight: 600; color: var(--fg); white-space: normal; max-width: 340px; }
  .bug-desc { color: var(--muted); font-size: 11px; white-space: normal; max-width: 340px; margin-top: 2px; }
  .sev { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; text-transform: capitalize; background: rgba(255,255,255,0.03); border: 1px solid; }
  .sel-status { background: rgba(255,255,255,0.04); border: 1px solid var(--border); border-radius: 6px; color: var(--fg); font-family: var(--font); font-size: 12px; padding: 3px 6px; cursor: pointer; text-transform: capitalize; }
  .btn-detail { background: rgba(99,102,241,0.10); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.25); }
  .btn-hide { background: rgba(251,191,36,0.10); color: var(--yellow); border: 1px solid rgba(251,191,36,0.25); }
  .btn-bug-del { background: rgba(248,113,113,0.08); color: var(--red); border: 1px solid rgba(248,113,113,0.2); margin-left: 4px; }
  tr.hidden-row { opacity: 0.5; }
  .bug-detail { padding: 14px 16px; background: rgba(255,255,255,0.015); }
  .bug-detail .d-sec { margin-bottom: 14px; }
  .bug-detail b { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 6px; }
  .bug-detail pre { white-space: pre-wrap; word-break: break-word; font-family: monospace; font-size: 11.5px; color: var(--fg); background: rgba(0,0,0,0.25); border: 1px solid var(--border); border-radius: 8px; padding: 10px 12px; max-height: 260px; overflow: auto; }
  .bug-detail .shots { display: flex; gap: 10px; flex-wrap: wrap; }
  .bug-detail .shots img { max-height: 150px; max-width: 240px; border-radius: 8px; border: 1px solid var(--border); }
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
  <div class="card yellow"><div class="num">${openBugs}</div><div class="lbl">Open bugs</div></div>
</div>

<div class="tabs" role="tablist">
  <button class="tab" data-tab="installs">Installs <span class="tab-count">${totalInstalls}</span></button>
  <button class="tab" data-tab="downloads">Downloads <span class="tab-count">${totalLeads}</span></button>
  <button class="tab" data-tab="bugs">Bug reports <span class="tab-count">${bugs.length}</span></button>
</div>

<section class="tab-panel" id="panel-installs">
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
</section>

<section class="tab-panel" id="panel-downloads">
  <div class="tbl-toolbar">
    <h2>Download requests</h2>
    <a href="/admin/export/leads" class="btn-export">↓ Export CSV</a>
  </div>
  <div class="tbl-wrap">
    <table>
      <thead><tr><th>Email</th><th>Country</th><th>Requested</th><th>Downloaded</th><th></th></tr></thead>
      <tbody>${leadRows || '<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--muted)">No requests yet</td></tr>'}</tbody>
    </table>
  </div>
</section>

<section class="tab-panel" id="panel-bugs">
  <div class="tbl-toolbar">
    <h2>Bug reports</h2>
    <a href="/admin/export/bugs" class="btn-export">↓ Export CSV</a>
  </div>
  <div class="tbl-wrap">
    <table>
      <thead><tr><th>Reported</th><th>Title</th><th>Severity</th><th>Status</th><th>App / OS</th><th>Email</th><th>Detail</th><th>Actions</th></tr></thead>
      <tbody>${bugRows || '<tr><td colspan="8" style="text-align:center;padding:24px;color:var(--muted)">No bug reports yet</td></tr>'}</tbody>
    </table>
  </div>
</section>

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
    if (!confirm('Delete this install record and permanently revoke the device?\\n\\n' + fp)) return;
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
    if (!confirm('Delete all records for ' + email + '?\\n\\nThis removes the lead and all their download tokens.')) return;
    btn.disabled = true;
    try {
      const data = await apiPost('/admin/delete-lead', { email });
      if (data.ok) { toast('Lead deleted', true); setTimeout(() => location.reload(), 800); }
      else { toast('Error: ' + (data.error || 'unknown'), false); btn.disabled = false; }
    } catch { toast('Network error', false); btn.disabled = false; }
    return;
  }

  // Bug: hide / show on the public board
  if (btn.classList.contains('btn-hide')) {
    const id = btn.dataset.id;
    const hidden = btn.dataset.hidden === '1';
    btn.disabled = true;
    try {
      const data = await apiPost('/admin/bugs/hide', { id, hidden: !hidden });
      if (data.ok) { toast(hidden ? 'Shown on board' : 'Hidden from board', true); setTimeout(() => location.reload(), 600); }
      else { toast('Error: ' + (data.error || 'unknown'), false); btn.disabled = false; }
    } catch { toast('Network error', false); btn.disabled = false; }
    return;
  }

  // Bug: delete
  if (btn.classList.contains('btn-bug-del')) {
    const id = btn.dataset.id;
    if (!confirm('Delete this bug report? This removes its screenshots and diagnostics too.')) return;
    btn.disabled = true;
    try {
      const data = await apiPost('/admin/bugs/delete', { id });
      if (data.ok) { toast('Bug deleted', true); setTimeout(() => location.reload(), 600); }
      else { toast('Error: ' + (data.error || 'unknown'), false); btn.disabled = false; }
    } catch { toast('Network error', false); btn.disabled = false; }
    return;
  }

  // Bug: expand detail (screenshots + diagnostics)
  if (btn.classList.contains('btn-detail')) {
    const id = btn.dataset.id;
    const row = document.getElementById('detail-' + id);
    if (!row) return;
    if (row.style.display !== 'none') { row.style.display = 'none'; return; }
    row.style.display = '';
    const box = document.getElementById('detailbox-' + id);
    if (box.dataset.loaded) return;
    box.innerHTML = 'Loading…';
    try {
      const res = await fetch('/admin/bugs/diag/' + id);
      const d = await res.json();
      box.innerHTML = renderDetail(d);
      box.dataset.loaded = '1';
    } catch { box.innerHTML = 'Failed to load detail'; }
    return;
  }
});

// Status dropdown
document.addEventListener('change', async (e) => {
  const sel = e.target.closest('.sel-status');
  if (!sel) return;
  const id = sel.dataset.id;
  sel.disabled = true;
  try {
    const data = await apiPost('/admin/bugs/status', { id, status: sel.value });
    toast(data.ok ? 'Status updated' : 'Error: ' + (data.error || 'unknown'), !!data.ok);
  } catch { toast('Network error', false); }
  sel.disabled = false;
});

// Tabs — switch panels + remember the choice (actions reload the page).
(function initTabs() {
  const tabs = [...document.querySelectorAll('.tab')];
  const panels = [...document.querySelectorAll('.tab-panel')];
  function activate(name) {
    tabs.forEach((t) => t.classList.toggle('active', t.dataset.tab === name));
    panels.forEach((p) => p.classList.toggle('active', p.id === 'panel-' + name));
    try { localStorage.setItem('nm_admin_tab', name); } catch { /* ignore */ }
  }
  tabs.forEach((t) => t.addEventListener('click', () => activate(t.dataset.tab)));
  let initial = 'installs';
  try { const s = localStorage.getItem('nm_admin_tab'); if (s) initial = s; } catch { /* ignore */ }
  if (!tabs.some((t) => t.dataset.tab === initial)) initial = 'installs';
  activate(initial);
})();

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function clock(ts) {
  try { return new Date(ts).toISOString().slice(11, 19); } catch { return ''; }
}
function renderDetail(d) {
  let html = '';
  if (d.description) html += '<div class="d-sec"><b>Description</b><pre>' + esc(d.description) + '</pre></div>';
  if (d.admin_notes) html += '<div class="d-sec"><b>Admin notes</b><pre>' + esc(d.admin_notes) + '</pre></div>';
  if (d.attachments && d.attachments.length) {
    html += '<div class="d-sec"><b>Screenshots (' + d.attachments.length + ')</b><div class="shots">' +
      d.attachments.map((a) => {
        const u = '/admin/bugs/img/' + encodeURIComponent(a.r2_key);
        return '<a href="' + u + '" target="_blank"><img src="' + u + '" alt="screenshot"></a>';
      }).join('') + '</div></div>';
  }
  const wrap = d.diagnostics || {};
  if (wrap.env) html += '<div class="d-sec"><b>Environment</b><pre>' + esc(JSON.stringify(wrap.env, null, 2)) + '</pre></div>';
  const di = wrap.diagnostics || {};
  const fe = di.frontend || [], be = di.backend || [];
  if (fe.length) {
    html += '<div class="d-sec"><b>Frontend actions (' + fe.length + ')</b><pre>' +
      esc(fe.map((c) => clock(c.ts) + '  ' + (c.kind || '?') + ': ' + (c.label || '') +
        (c.ms != null ? '  ' + c.ms + 'ms' : '') + (c.ok === false ? '  ERR' : '')).join('\\n')) + '</pre></div>';
  }
  if (be.length) {
    html += '<div class="d-sec"><b>Backend log (' + be.length + ')</b><pre>' +
      esc(be.map((l) => clock(l.ts) + '  ' + (l.level || '') + '  ' + (l.target || '') + ': ' + (l.msg || '')).join('\\n')) + '</pre></div>';
  }
  return html || '<span style="color:var(--muted)">No diagnostics</span>';
}
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
    "This link is personal — keep it; it works for 30 days. Apple Silicon · macOS 13+.",
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
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#f3f3f7;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Your Nomima download link is inside — keep it, it works for 30 days.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f3f7;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 34px rgba(20,20,40,0.10);">
        <tr><td style="background:#6366f1;background:linear-gradient(135deg,#6366f1 0%,#f048a8 100%);padding:30px 32px;text-align:center;">
          <img src="${logoUrl}" width="46" height="46" alt="Nomima" style="display:inline-block;border-radius:11px;border:0;outline:none;text-decoration:none;">
          <div style="font:800 18px ${FONT};color:#ffffff;margin-top:11px;letter-spacing:-0.02em;">Nomima</div>
        </td></tr>
        <tr><td style="padding:32px;font-family:${FONT};color:#1c1c28;">
          <h1 style="margin:0 0 12px;font-size:21px;font-weight:800;letter-spacing:-0.02em;">Welcome to Nomima 👋</h1>
          <p style="margin:0 0 22px;font-size:14.5px;line-height:1.62;color:#4a4a5a;">Thanks for joining. Your private, offline notebook is ready — every word you write becomes structured, searchable knowledge, all on your Mac.</p>
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 10px;"><tr>
            <td style="border-radius:12px;background:#6366f1;background:linear-gradient(135deg,#6366f1 0%,#f048a8 100%);">
              <a href="${downloadUrl}" style="display:inline-block;padding:13px 28px;font:700 15px ${FONT};color:#ffffff;text-decoration:none;border-radius:12px;">↓&nbsp;&nbsp;Download Nomima</a>
            </td>
          </tr></table>
          <p style="margin:8px 0 26px;font-size:12px;line-height:1.5;color:#9a9aa8;">This link is personal — keep it; it works for 30 days. Apple Silicon · macOS 13+.</p>
          <div style="border-top:1px solid #ececf2;padding-top:22px;">
            <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#1c1c28;">New to Nomima?</p>
            <p style="margin:0 0 12px;font-size:13.5px;line-height:1.58;color:#4a4a5a;">The User Guide walks you through Smart Tags, the knowledge graph, reminders and everything else in a few minutes — so you get the best out of it from day one.</p>
            <a href="${guideUrl}" style="font:600 13.5px ${FONT};color:#6366f1;text-decoration:none;">Read the User Guide →</a>
          </div>
        </td></tr>
        <tr><td style="padding:20px 32px;background:#fafafc;border-top:1px solid #ececf2;text-align:center;">
          <p style="margin:0;font:400 11.5px ${FONT};color:#9a9aa8;line-height:1.6;">© 2026 Nomima · Private. Offline. Yours.<br>You're receiving this because you requested a download at nomima.io.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
