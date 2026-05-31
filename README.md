# Nomima — Landing Page

A self-contained static landing page for downloading the Nomima macOS app, with a
client-side password gate. No build step, no dependencies — plain HTML/CSS/JS.

## Folder contents

```
Nomima-Landing/
├── index.html          ← the page (gate + landing + interactive graph)
├── styles.css          ← styling (Nomima brand colors)
├── app.js              ← password gate logic
├── graph.js            ← interactive sample knowledge graph (pan/zoom)
├── logo.svg            ← Nomima brand mark
├── hashes.example.js   ← template for the gitignored hashes.js (access-code hashes)
├── downloads/
│   └── Nomima-0.1.0-arm64.zip   ← the app (Apple Silicon, signed + notarized)
├── .github/workflows/
│   └── deploy.yml      ← GitHub Pages deploy; injects code hashes from a secret
├── server-lock/        ← OPTIONAL real .htaccess lock (Apache/cPanel only — not the site)
└── README.md           ← this file
```

Deployment is automated (see [Deploying](#deploying-github-pages)). The static
assets keep their relative structure so `index.html` finds
`downloads/Nomima-0.1.0-arm64.zip`. `hashes.js` is generated at deploy time and is
not committed.

> The hero's knowledge graph (`graph.js`) is a faithful port of the app's own
> Knowledge Graph view — same engine (`force-graph` / d3-force, 2D canvas), same
> rendering (glowing lucide-icon nodes, curved directional edges, particles,
> zoom-stable labels) and interactions (drag-pan, node-drag, click-to-focus,
> ⌘/Ctrl-scroll zoom + toolbar). It loads `force-graph` from a CDN (esm.sh) via the
> import map in `index.html`, so the page needs internet to show it (everything else
> is local). If it fails to load, the graph panel hides itself and the rest of the
> page is unaffected.

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

### Where the codes live (GitHub secret, not the repo)

The plaintext access codes are stored **only** in a GitHub Actions secret named
`NOMIMA_ACCESS_CODES` (one code per line). On every push to `main`, the deploy
workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) hashes
them with SHA-256 and writes the hashes into `hashes.js`, which the site loads as
`window.__NOMIMA_HASHES__`. So:

- The repo contains **no codes and no hashes** (`hashes.js` is gitignored).
- The published site contains only the **hashes** (the plaintext never leaves the
  secret).
- `app.js` reads whatever hashes are present; if `hashes.js` is missing, the gate
  rejects every code (fail-closed).

**To add / rotate codes:** edit the `NOMIMA_ACCESS_CODES` secret
(**Settings → Secrets and variables → Actions**) and re-run the deploy. Keep your
own private map of which plaintext code you handed to whom.

**To test locally:** copy [`hashes.example.js`](hashes.example.js) to `hashes.js`
(gitignored) and add a test code's hash (`echo -n "code" | shasum -a 256`).

> Note: opening the page consumes a code once per browser — including your own
> tests. Clear the site's storage to retry
> (DevTools → Application → Local Storage → delete `nomima_consumed_codes`).

## Deploying (GitHub Pages)

This repo deploys to **GitHub Pages** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). One-time setup:

1. **Make the repo public** (Pages is free on public repos; private repos need a
   paid GitHub plan). Note: a public repo means the download link in `index.html`
   is readable in the source regardless of the gate.
2. **Add the access codes secret.** Settings → Secrets and variables → Actions →
   *New repository secret* → name `NOMIMA_ACCESS_CODES`, value = one code per line.
3. **Enable Pages from Actions.** Settings → Pages → *Build and deployment* →
   Source = **GitHub Actions**.
4. **Push to `main`** (or run the workflow manually). The site builds and the
   deploy URL appears in the Actions run and under Settings → Pages.

### Custom domain
Settings → Pages → *Custom domain* → enter your domain (this commits a `CNAME`).
Then at **GoDaddy → DNS** point the domain at GitHub:
- **apex** (`yourdomain.com`) → four `A` records: `185.199.108.153`,
  `.109.153`, `.110.153`, `.111.153`
- **www** → `CNAME` to `<username>.github.io`

Tick **Enforce HTTPS** once the certificate provisions.

> The 27 MB app zip is within Pages' 100 MB/file limit, so it serves fine.

> ⚠️ **Pages has no server-side auth.** The JS access-code gate is the only lock,
> and it is soft (the hashes and download link are downloaded by every visitor).
> For a *hard* lock you'd need a host that runs server-side code (e.g. a
> Cloudflare Pages Function or Netlify Edge Function doing Basic Auth) — see
> [`server-lock/`](server-lock/) for the Apache/cPanel equivalent.

> Note: the gate uses the Web Crypto API, which only runs in a **secure context**
> (HTTPS or `localhost`). It works over `https://yourdomain.com`; opening
> `index.html` as a `file://` may block the hash check — always test over a server.

## Preview locally

```bash
cd Nomima-Landing
python3 -m http.server 8000
# then open http://localhost:8000
```
`localhost` counts as a secure context, so the gate works.
