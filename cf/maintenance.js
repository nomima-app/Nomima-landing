// Temporary maintenance stub for nomima.io while the site is unpublished.
//
// The PUBLIC site (marketing pages, static assets, the email-gated download flow)
// returns 503. But the device kill-switch (`POST /access`) and the admin dashboard
// (`/admin/*`) are DELEGATED to the real worker so revoke/unrevoke keeps working
// and existing revokes stay enforced. Those paths need the D1 binding (see
// wrangler.maintenance.jsonc) and the existing ADMIN_USER/ADMIN_PASS secrets,
// which remain attached to the `nomima-landing` worker across deploys.
//
// Re-enable the full site with:
//   git checkout main && wrangler deploy   (uses wrangler.jsonc → cf/worker.js)
import realWorker from "./worker.js";

const HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Nomima — back soon</title>
<style>
  :root { color-scheme: light dark; }
  html, body { height: 100%; margin: 0; }
  body {
    display: grid; place-items: center;
    font: 16px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
    background: #0f1115; color: #e8e8ea; padding: 2rem; text-align: center;
  }
  .card { max-width: 32rem; }
  h1 { font-size: 1.6rem; font-weight: 600; margin: 0 0 .75rem; letter-spacing: -.01em; }
  p { margin: .5rem 0; color: #a9adb6; }
  a { color: #e8e8ea; }
</style>
</head>
<body>
  <div class="card">
    <h1>Nomima will be back soon</h1>
    <p>We're getting the next version ready. The site is temporarily offline.</p>
    <p>Questions? <a href="mailto:support@nomima.io">support@nomima.io</a></p>
  </div>
</body>
</html>`;

function maintenance() {
  return new Response(HTML, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "retry-after": "86400",
      "cache-control": "no-store",
    },
  });
}

export default {
  async fetch(request, env, ctx) {
    const path = new URL(request.url).pathname;
    // Keep the kill switch + admin dashboard live; 503 everything public.
    if (path === "/access" || path === "/admin" || path.startsWith("/admin/")) {
      return realWorker.fetch(request, env, ctx);
    }
    return maintenance();
  },
};
