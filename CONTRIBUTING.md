# Contributing to Nomima — Landing Page

This is the static download/landing site for the [Nomima](https://github.com/fng8111/Nomima)
macOS app. No build step, no dependencies — plain HTML/CSS/JS.

## Branching strategy — GitHub Flow

Like the main app, this repo uses **GitHub Flow**: a single long-lived branch
(`main`) plus short-lived topic branches. `main` is always deployable.

### The rules

1. **`main` is always deployable.** Every commit on `main` should render and work
   if uploaded as-is. `main` is protected — no direct pushes; changes land via
   pull request.

2. **Branch off `main` for every change.** Use a descriptive, prefixed name:

   | Prefix      | Use for                              | Example                         |
   |-------------|--------------------------------------|---------------------------------|
   | `feature/`  | New sections / functionality         | `feature/pricing-section`       |
   | `fix/`      | Bug fixes                            | `fix/gate-mobile-layout`        |
   | `chore/`    | Tooling, copy, deps, refactors       | `chore/bump-app-zip-0.2.0`      |

   ```bash
   git checkout main
   git pull
   git checkout -b feature/my-thing
   ```

3. **Commit in small, logical steps** ([Conventional Commits](https://www.conventionalcommits.org/)
   encouraged): `feat:`, `fix:`, `chore:` …

4. **Open a pull request** into `main`. Keep PRs focused; describe what and why.

5. **Merge, then delete the branch.** Squash-merge keeps `main` history linear.

## 🔒 Secrets — this repo is PUBLIC

Never commit credentials or plaintext access codes:

- **`.htpasswd`** — generate it locally at deploy time; it is gitignored. See
  [`server-lock/README.md`](server-lock/README.md).
- **Access-code plaintext** — only the SHA-256 hashes belong in `app.js`. Keep the
  hash→plaintext mapping in a private place (password manager), never in the repo.
- Treat the JS gate as a soft, casual-visitor deterrent only — the download link
  and code hashes are downloaded by every visitor. It is **not** real security.

If a secret is ever committed, **rotate it** (it lives in git history forever) and
scrub history before the next push.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000  (localhost is a secure context, so the gate works)
```

See [`README.md`](README.md) for the full layout and deployment options.
