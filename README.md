# Nomima — Landing Page

A self-contained static landing page for downloading the Nomima macOS app, with a
client-side password gate. No build step, no dependencies — plain HTML/CSS/JS.

## Folder contents

```
Nomima-Landing/
├── index.html      ← the page (gate + landing + interactive graph)
├── styles.css      ← styling (Nomima brand colors)
├── app.js          ← password gate logic
├── graph.js        ← interactive sample knowledge graph (pan/zoom)
├── logo.svg        ← Nomima brand mark
├── downloads/
│   └── Nomima-0.1.0-arm64.zip   ← the app (Apple Silicon, signed + notarized)
├── server-lock/    ← OPTIONAL real .htaccess lock (Apache/cPanel only — not the site)
└── README.md       ← this file
```

The whole folder (except `server-lock/`) is ready to upload as-is. Keep the relative
structure intact so `index.html` can find `downloads/Nomima-0.1.0-arm64.zip`.

> The hero's 3D knowledge graph (`graph.js`) loads three.js + 3d-force-graph from a
> CDN (esm.sh) via an import map in `index.html`, so the page needs internet to show
> it (everything else is local). If the modules fail to load, the graph panel hides
> itself gracefully and the rest of the page is unaffected.

## The download

`downloads/Nomima-0.1.0-arm64.zip` is the **signed + Apple-notarized** app
(Developer ID: Fouad Ghandour, Team KGPABSJY76), Apple Silicon, macOS 11+. The app
inside carries a stapled notarization ticket, so users just unzip, drag `Nomima.app`
to Applications, and open — **no Gatekeeper warning**.

> We ship the notarized **app in a ZIP** rather than a DMG because the build's `.app`
> is notarized + stapled while the `.dmg` wrapper was not notarized. A ditto-made ZIP
> preserves the stapled app and is Gatekeeper-clean. To switch to a DMG later,
> notarize + staple the `.dmg` itself, then drop it into `downloads/` and update the
> link in `index.html`.

## Access codes (one-time use)

The gate accepts a set of **one-time access codes**. Hand ONE code to each
person. Only the SHA-256 hashes live in `app.js` — never the plaintext.

> 🔒 **Plaintext codes are NOT stored in this repository.** This repo is public,
> so the code table lives only in a private place (a password manager, a private
> note, etc.). `app.js` ships only the irreversible hashes. Keep your own private
> list mapping each hash to its plaintext code so you know which to hand out.
>
> Because this is a fully static site, the hashes in `app.js` are downloaded by
> every visitor regardless — the gate is a soft, casual-visitor deterrent, **not**
> real security (see the limits below). Do not reuse a real password elsewhere as
> an access code.

### How "single use" works (and its limits)

Once a code successfully unlocks the page **in a given browser**, it is recorded
in that browser's `localStorage` and will be **rejected if entered again** there
("This code has already been used on this device").

> ⚠️ **This is still a soft, client-side lock.** Because the site is fully
> static, there is no server to record a redemption globally. The "used" flag
> lives only on the visitor's machine, so the same code *will* work again in a
> different browser, an incognito window, or another device — and a technical
> visitor can read the download link via DevTools / "View Source". It keeps the
> page private from casual visitors and search engines (also marked `noindex`),
> but it is **not** real security.
>
> For **true** single-use (a code that dies forever after one redemption,
> anywhere), you need server-side state — a small serverless function that marks
> the code consumed in a database. Not possible on a static, domain-only setup.

### To add / rotate codes

1. Pick a new code and hash it:
   ```bash
   echo -n "your-new-code" | shasum -a 256
   ```
2. Add the hex string to the `ACCESS_CODE_HASHES` array in `app.js` (and note the
   plaintext in this table).
3. To reset a "used" code while testing, clear the site's storage in the browser
   (DevTools → Application → Local Storage → delete `nomima_consumed_codes`).

> Note: opening the page consumes a code once per browser — including your own
> tests. Use a spare code (or clear local storage) when testing repeatedly.

## Deploying to your GoDaddy domain

You said you currently own the **domain only** (no hosting plan yet). A static
site needs somewhere to be served from. Two common paths:

### Option A — Add GoDaddy Web Hosting (cPanel), then upload
1. In GoDaddy, add a **Web Hosting (cPanel/Linux)** plan and attach your domain.
2. Open **cPanel → File Manager → `public_html`**.
3. Upload **the contents of this folder** (not the folder itself) into
   `public_html` — so `index.html` sits at `public_html/index.html` and the DMG
   at `public_html/downloads/...`.
4. Visit your domain. Done.
   - Bonus: cPanel hosting *also* supports a **real** password lock via
     **Directory Privacy** (`.htaccess` Basic Auth) if you later want hard
     protection instead of the JS gate.

### Option B — Point the domain at a free static host (recommended for static)
Static hosts serve this kind of site for free, with HTTPS, and are easy to use:
- **Cloudflare Pages**, **Netlify**, or **GitHub Pages**.
- Upload/drag this folder, then in **GoDaddy → DNS** point your domain
  (CNAME/A records) at the host per their instructions.
- ⚠️ The 27 MB DMG exceeds some hosts' per-file limits on free tiers
  (e.g. GitHub's soft 25 MB warning). Cloudflare Pages and Netlify handle it.

> Note: the password gate uses the Web Crypto API, which only runs in a **secure
> context** (HTTPS or `localhost`). Over real `https://yourdomain.com` it works
> fine. Opening `index.html` directly as a `file://` may block the hash check in
> some browsers — always test over a server.

## Preview locally

```bash
cd Nomima-Landing
python3 -m http.server 8000
# then open http://localhost:8000
```
`localhost` counts as a secure context, so the gate works.
