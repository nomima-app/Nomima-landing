# Releasing nomima.io

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
