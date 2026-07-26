# Releasing nomima.io

> 🚧 **ACTIVE: the homepage is currently a coming-soon page.**
> `nomima.io/` and `/index.html` serve **`coming-soon.html`** while the real landing
> page is being reworked. `index.html` itself is untouched on disk — nothing was
> rebuilt or deleted. Everything else is live and unchanged: `download.html`,
> `releases.html`, `/docs`, the legal pages, `latest.json` (the in-app self-updater),
> `POST /access`, `/admin` and the `/api/*` backend.
>
> **To restore the real landing page** (3 steps, then deploy):
> 1. `cf/worker.js` — delete the `COMING_SOON` block and the `if (COMING_SOON …)` branch
>    at the top of `fetch()`.
> 2. `wrangler.jsonc` — remove `"run_worker_first"` from the `assets` block.
> 3. `wrangler deploy` (or merge to `main`).
>
> Deleting `coming-soon.html` is optional — it is inert once step 1 is done.
> Note: reaching the Worker for `/` **requires** `run_worker_first`, because Workers
> serves a matching static asset *before* invoking the script. Without it, `/` goes
> straight to `index.html` and the takeover silently does nothing.

**The live site is a Cloudflare Worker** (`cf/worker.js`). It serves the static
marketing site (the `ASSETS` binding, `directory: "."`) **and** the backend:

| Route | Purpose |
|---|---|
| `POST /api/request-download`, `GET /get` | email-gated, tokenized DMG download (30-day reusable token) |
| `POST /access` | app device check-in + revoke gate |
| `GET /admin`, `/admin/login`, `/admin/logout` | admin dashboard — session-cookie auth (`ADMIN_USER` / `ADMIN_PASS`) |
| `/admin/revoke` · `/unrevoke` · `/delete-device` · `/delete-lead` · `/export/{devices,leads}` · `/data` | install management |

> ⚠️ **The Worker is the source of truth — deploy it with `wrangler deploy`.**
> The "Deploy to GitHub Pages" workflow is a **static mirror only**; it does **not**
> include the Worker backend or `/admin`. Deploying/serving from anywhere other than
> the Worker built off `main` is what previously took `/admin` offline.

## Release checklist
1. **Everything backend lives on `main`.** The download backend *and* the
   `/access` + `/admin` system are all on `main` — never park backend features on
   a side branch, or a Worker deploy from `main` will drop those routes.
2. **`latest.json`** — bump `version` · `notes` · `pub_date` · `url`, and publish the
   GitHub release with the signed/notarized DMG on `nomima-app/Nomima-landing`.
3. **Deploy the Worker:** `wrangler deploy` (from `main`).
   - One-time per environment: `wrangler secret put ADMIN_USER` and
     `wrangler secret put ADMIN_PASS`; ensure `cf/schema.sql` (tables `leads`,
     `download_tokens`, `device_checkins`, `blocked_devices`) is applied to the D1 DB.
4. **Verify:** `/` loads · `/admin` shows the login · a test `/api/request-download`
   email arrives · the `/get` link 302s to the DMG.

## Automating the Worker deploy (recommended)
`.github/workflows/deploy.yml` has a **`deploy-worker`** job that runs
`wrangler deploy` on every push to `main` **iff** the repo secret
**`CLOUDFLARE_API_TOKEN`** is set (scopes: *Workers Scripts:Edit* + the account's
Workers/D1 read perms). Add that secret to make Worker deploys automatic; until
then the job no-ops with a warning and you run step 3 by hand.
