# Nomima — Landing Page

A self-contained static landing page for downloading the **free** Nomima macOS app.
No build step, no dependencies — plain HTML/CSS/JS.

Nomima is now **completely free, including publishing.** To download, a visitor
enters their email; a Make.com automation (triggered off the Mailchimp list) emails
them a welcome note and a **tokenized download link** that lands on `download.html`.

## Folder contents

```
Nomima-Landing/
├── index.html          ← the marketing page (everything free + email capture, #get)
├── download.html       ← redeem page: the target of the tokenized email link
├── features.html       ← feature deep-dive
├── blocks.html         ← block showcase (public — no gate)
├── contact.html · privacy.html · terms.html
├── styles.css          ← styling (Nomima brand colors)
├── graph.js · kg3d.js · kgbg.js · smartdashes.js   ← hero / block visuals
├── logo.svg            ← Nomima brand mark
├── latest.json         ← version manifest (version + DMG url); download.html reads this
├── downloads/          ← optional local DMG copy
├── .github/workflows/
│   └── deploy.yml      ← GitHub Pages deploy (static, no secrets needed)
└── README.md           ← this file
```

## The email-gated download flow

The download is **soft-gated behind an email** (lead capture) — Nomima is free, so
this is about staying in touch, not DRM.

1. **Capture** — On `index.html`, the `#get` section has an email field that
   subscribes the address to **Mailchimp** (JSONP `subscribe/post-json`, the
   `MC_URL` near the bottom of `index.html`). On success the form swaps to a
   "Check your inbox" state.
2. **Send** — A **Make.com** scenario watches the Mailchimp list for new
   subscribers. For each, it generates a unique token, **emails the welcome note +
   the tokenized download link**, and (optionally) logs the token.
3. **Redeem** — The tokenized link points at this site's `download.html`:

   ```
   https://<your-domain>/download.html?t=<TOKEN>
   ```

   `download.html` reads `?t=` (or `?token=`), pulls the current DMG URL + version
   from `latest.json`, greets the user, and auto-starts the download (with a manual
   button fallback). With no/short token it instead asks them to request a link.

### Configure this in Make.com

- **Download URL to email:** `https://<your-domain>/download.html?t={{token}}`
  where `{{token}}` is whatever unique value your scenario generates (a UUID is fine).
- Token validation on `download.html` is intentionally **soft** — the token only
  needs to be present and ≥ 6 chars. This matches the prior client-side model; the
  static site can't verify a server-generated token without a backend. If you ever
  want true one-time links, have Make.com store tokens and add a serverless
  validation endpoint that `download.html` calls before arming the button.

### Updating the download

`download.html` and the app's in-app update check both read **`latest.json`**:

```json
{ "version": "1.6.0", "url": "https://github.com/.../Nomima_1.6.0_aarch64.dmg", ... }
```

Publish flow per release: (1) `gh release create vX.Y.Z … <dmg>` (uploads the
notarized DMG as the release asset); (2) rewrite `latest.json`
(`version`/`notes`/`pub_date`/`url`) — both `download.html` and the in-app update
checker read it; (3) commit + push `main`. The download page picks up the new URL
automatically — no hero edits needed.

## Deploying (GitHub Pages)

This repo deploys to **GitHub Pages** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) — a plain static
publish, **no secrets required**. Push to `main` (or run the workflow manually); the
deploy URL appears in the Actions run and under Settings → Pages.

### Custom domain
Settings → Pages → *Custom domain* → enter your domain (this commits a `CNAME`).
Then at your DNS provider point the domain at GitHub:
- **apex** (`yourdomain.com`) → four `A` records: `185.199.108.153`,
  `.109.153`, `.110.153`, `.111.153`
- **www** → `CNAME` to `<username>.github.io`

Tick **Enforce HTTPS** once the certificate provisions. Whatever domain you use,
set the same base in the Make.com download link so `download.html?t=…` resolves.

## Preview locally

```bash
cd Nomima-Landing
python3 -m http.server 8000
# then open http://localhost:8000
# test the redeem page: http://localhost:8000/download.html?t=test-token-123
```
