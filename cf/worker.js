// Nomima landing — Cloudflare Worker.
//
// Serves the static marketing site (via the ASSETS binding) AND a small backend:
//   POST /api/request-download  → store the lead, mint a per-email token, email the link
//   GET  /get?t=<token>         → validate the token (unexpired), 302 → DMG
//
// The DMG itself stays on GitHub Releases; its URL is only ever handed out after a
// valid token redemption (never linked on the site). The token is reusable within
// its validity window — a single-use link breaks on double-clicks and on the link
// scanners many mail providers run, both of which would burn it before the human.

const TOKEN_TTL_HOURS = 24 * 30; // 30 days
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
