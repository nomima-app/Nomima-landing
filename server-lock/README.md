# Optional: real server-side password lock (`.htaccess`)

This folder is **NOT part of the website** — don't upload it as-is into your site
root. It's an optional add-on that gives you a **hard** password lock, but it
**only works on Apache / cPanel "Web Hosting"** (not on a domain-only setup, and
not on static hosts like Cloudflare Pages or Netlify, which ignore `.htaccess`).

## Two locks — pick what fits your host

| | JavaScript gate (`app.js`) | `.htaccess` Basic Auth (this folder) |
|---|---|---|
| Works on | any host (static or Apache) | Apache / cPanel only |
| Strength | **soft** — link readable in page source | **hard** — files never sent until login |
| Setup | already built-in, nothing to do | requires cPanel / file upload |

If you deploy to **Cloudflare Pages / Netlify** → you can't use `.htaccess`; rely on
the JS gate (or those hosts' own paid password-protection features).

If you deploy to **GoDaddy Web Hosting (cPanel)** → use this for a real lock.

## Files here
- **`.htaccess`** — the Apache config (read the comments inside; you must set the
  `AuthUserFile` absolute path).

> 🔒 **No `.htpasswd` is shipped in this repository** — it holds a real password
> (hashed, but brute-forceable offline), and this repo is public. Generate your
> own with the command below before deploying, and never commit it (`.htpasswd`
> is in `.gitignore`).

## Quickest path on cPanel
Honestly, the easiest route is to ignore these files and use cPanel's UI:
**cPanel → Files → Directory Privacy → select `public_html` → tick "Password
protect this directory" → add a user/password → Save.** cPanel generates its own
`.htaccess` + `.htpasswd` with correct paths automatically.

## To change the htpasswd password manually
```bash
# generates an Apache-compatible line; paste it into .htpasswd
openssl passwd -apr1 "your-new-password"
# then prepend "username:"  →  nomima:$apr1$....
```
Or use `htpasswd -c .htpasswd nomima` if the Apache tools are installed.

> ⚠️ Always enable HTTPS (free AutoSSL/Let's Encrypt in cPanel) when using Basic
> Auth — the credentials are only base64-encoded over the wire, so without TLS
> they're effectively sent in the clear.
