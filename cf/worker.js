// Nomima landing — Cloudflare Worker.
//
// Serves the static marketing site (via the ASSETS binding) AND a small backend:
//   POST /api/request-download  → store the lead, mint a single-use token, email the link
//   GET  /get?t=<token>         → validate the token (unused + unexpired), burn it, 302 → DMG
//
// The DMG itself stays on GitHub Releases; its URL is only ever handed out after a
// valid token redemption (never linked on the site).

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
<body style="margin:0;padding:0;background:#07070e;-webkit-font-smoothing:antialiased;">
  <!-- Preview text -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;color:#07070e;">Your Nomima download link — works once, expires in 24 hours.</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#07070e;padding:40px 16px 48px;">
    <tr><td align="center">
      <table role="presentation" class="email-card" width="100%" cellpadding="0" cellspacing="0"
        style="max-width:460px;background:#0e0e1a;border-radius:20px;border:1px solid rgba(99,102,241,0.18);box-shadow:0 0 80px rgba(99,102,241,0.12),0 0 0 1px rgba(99,102,241,0.08);overflow:hidden;">

        <!-- Header: N mark + wordmark -->
        <tr><td style="padding:32px 36px 20px;background:#0e0e1a;background:radial-gradient(ellipse 90% 120% at 50% 0%,rgba(99,102,241,0.14) 0%,transparent 70%);">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td valign="middle" style="padding-right:14px;">
              <div style="display:inline-block;filter:drop-shadow(0 0 14px rgba(99,102,241,0.7)) drop-shadow(0 0 6px rgba(240,72,168,0.4));">
                <svg width="52" height="52" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="el" x1="312" y1="97" x2="312" y2="927" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#7c6ff7"/>
                      <stop offset="1" stop-color="#5a72f5"/>
                    </linearGradient>
                    <linearGradient id="er" x1="712" y1="97" x2="712" y2="927" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#ff4db0"/>
                      <stop offset="1" stop-color="#a040d0"/>
                    </linearGradient>
                  </defs>
                  <line x1="312" y1="200" x2="312" y2="824" stroke="url(#el)" stroke-width="205" stroke-linecap="round"/>
                  <line x1="712" y1="200" x2="712" y2="824" stroke="url(#er)" stroke-width="205" stroke-linecap="round"/>
                  <line x1="312" y1="200" x2="712" y2="824" stroke="#6a3cc4" stroke-width="205" stroke-linecap="round" opacity="0.55"/>
                </svg>
              </div>
            </td>
            <td valign="middle">
              <span style="font-family:${FONT};font-size:24px;font-weight:800;letter-spacing:-0.03em;color:#ffffff;">Nomima</span>
            </td>
          </tr></table>
        </td></tr>

        <!-- Body -->
        <tr><td class="email-body" style="padding:4px 36px 32px;font-family:${FONT};">

          <!-- Greeting -->
          <h1 style="margin:0 0 8px;font-size:20px;font-weight:800;letter-spacing:-0.02em;color:#f0f0fa;">Welcome 👋 Your notebook is ready.</h1>
          <p style="margin:0 0 24px;font-size:13.5px;line-height:1.7;color:#7a7a9a;">
            Write the way you think. Nomima quietly turns your notes into a knowledge graph — surfacing connections, people, and deadlines without any extra effort.
          </p>

          <!-- Fake note block — shows smart tags in context -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 26px;">
            <tr><td style="background:#13131f;border:1px solid rgba(99,102,241,0.16);border-radius:12px;padding:16px 18px;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#44445a;letter-spacing:0.05em;text-transform:uppercase;">From your first note</p>
              <p style="margin:0;font-size:13.5px;line-height:1.72;color:#b0b0cc;">
                Catch up with
                <span style="display:inline-block;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(96,165,250,0.12);border:1px solid rgba(96,165,250,0.28);color:#60A5FA;">@Alex</span>
                about the
                <span style="display:inline-block;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.26);color:#8b8df5;">#launch</span>
                plan — review deck by
                <span style="display:inline-block;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(45,212,191,0.12);border:1px solid rgba(45,212,191,0.28);color:#2DD4BF;">June 14</span>
                and mark
                <span style="display:inline-block;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(232,121,249,0.12);border:1px solid rgba(232,121,249,0.22);color:#E879F9;">#complete</span>
                when done.
              </p>
            </td></tr>
          </table>

          <!-- Download button -->
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 10px;">
            <tr>
              <td style="border-radius:999px;background:linear-gradient(135deg,#6366f1,#f048a8);box-shadow:0 4px 22px rgba(99,102,241,0.38);">
                <a href="${downloadUrl}"
                   style="display:inline-block;padding:11px 28px;font-family:${FONT};font-size:13.5px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:999px;letter-spacing:-0.01em;">
                  ↓&nbsp;&nbsp;Download Nomima
                </a>
              </td>
            </tr>
          </table>
          <p style="margin:0 0 28px;font-size:11px;line-height:1.5;color:#44445a;">Personal link · works once · expires in 24 h · Apple Silicon · macOS 13+</p>

          <!-- Divider -->
          <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(99,102,241,0.2),rgba(240,72,168,0.12),transparent);margin-bottom:24px;"></div>

          <!-- Guide section -->
          <p style="margin:0 0 5px;font-size:13px;font-weight:700;color:#c0c0e0;">New to Nomima?</p>
          <p style="margin:0 0 12px;font-size:13px;line-height:1.62;color:#6a6a88;">The User Guide walks you through Smart Tags, the knowledge graph, and reminders — five minutes to get the most out of it from day one.</p>
          <a href="${guideUrl}" style="font-family:${FONT};font-size:13px;font-weight:600;color:#8b8df5;text-decoration:none;">Read the User Guide →</a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 36px;border-top:1px solid rgba(255,255,255,0.05);text-align:center;">
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
