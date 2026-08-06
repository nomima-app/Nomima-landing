// Nomima Pro licensing — key issuance, seat-limited activation, validation.
//
// A license is emailed to the buyer after a Lemon Squeezy purchase and unlocks
// every AI feature in the desktop app (Summon, the inline wand, MCP). It permits
// SEAT_LIMIT concurrent machines; a seat is freed by deactivating one.
//
// Billing is Lemon Squeezy as Merchant of Record (LS is the legal seller and
// remits VAT/sales tax + absorbs chargebacks). Both one-time orders and
// subscriptions are handled, so the product can be either without a code change
// — the price and billing period live in the LS dashboard, not here.
//
// ⚠️ Lemon Squeezy delivers EVERY store event to EVERY configured webhook URL,
// so this endpoint also sees Nomima AI credit orders and vice versa. Both
// handlers filter on the variant id (`LS_LICENSE_VARIANT_IDS`) — without that, a
// license purchase would silently also top up AI credits.
//
// Consumer is the desktop app's Rust licensing service (reqwest) + LS
// server-to-server webhooks. The response shapes deliberately mirror what
// `license_service.rs` already expects, so the app side is a base-URL swap
// rather than a rewrite.
import { json, verifyLsSignature, licenseVariantIds, orderVariantId, EMAIL_FROM, EMAIL_REPLY_TO } from "./lsutil.js";

/** Concurrent machines one license may activate. */
export const SEAT_LIMIT = 2;

/** Unambiguous alphabet — no 0/O/1/I/L, so a key read off an email can be typed
 *  back without transcription errors. 20 chars over 31 symbols ≈ 99 bits, well
 *  past brute-forcing, which is why activation needs no rate limit of its own. */
const KEY_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

/** `NOMI-XXXXX-XXXXX-XXXXX-XXXXX` */
function makeLicenseKey() {
  const b = new Uint8Array(20);
  crypto.getRandomValues(b);
  const chars = [...b].map((x) => KEY_ALPHABET[x % KEY_ALPHABET.length]);
  const groups = [];
  for (let i = 0; i < 20; i += 5) groups.push(chars.slice(i, i + 5).join(""));
  return `NOMI-${groups.join("-")}`;
}

/** Accept a key typed with any casing/spacing; storage is always canonical. */
function normaliseKey(raw) {
  return String(raw || "").trim().toUpperCase().replace(/\s+/g, "");
}

const nowIso = () => new Date().toISOString();

// ── Lookup ────────────────────────────────────────────────────────────────────

/** Resolve a key to its row plus a machine-readable reason when unusable.
 *  `expires_at` is NULL for a perpetual (one-time) license. */
async function lookupLicense(env, key) {
  const row = await env.DB.prepare(
    "SELECT key, email, status, seats, expires_at FROM licenses WHERE key = ?1",
  ).bind(key).first();
  if (!row) return { error: "invalid_key", status: 404 };
  if (row.status === "revoked") return { error: "revoked", status: 403 };
  if (row.expires_at && new Date(row.expires_at).getTime() <= Date.now()) {
    return { error: "expired", status: 403, row };
  }
  return { row };
}

async function activationsFor(env, key) {
  const res = await env.DB.prepare(
    "SELECT fingerprint, machine_name, activated_at FROM license_activations WHERE license_key = ?1 ORDER BY activated_at",
  ).bind(key).all();
  return res?.results || [];
}

/** The success payload — one shape for activate and validate so the app parses
 *  a single struct. `seats`/`machines` let the UI explain a seat-limit refusal
 *  ("in use on <name>") instead of a bare error. */
function licensePayload(row, machines) {
  return {
    valid: true,
    key: row.key,
    email: row.email,
    expiry: row.expires_at || null,
    seats: row.seats ?? SEAT_LIMIT,
    seatsUsed: machines.length,
    machines: machines.map((m) => ({
      fingerprint: m.fingerprint,
      name: m.machine_name || null,
      activatedAt: m.activated_at,
    })),
  };
}

async function readBody(request) {
  try { return await request.json(); } catch { return null; }
}

// ── POST /api/license/activate ────────────────────────────────────────────────

/** Bind this machine to the license, or refuse when every seat is taken.
 *  Idempotent: re-activating an already-bound machine succeeds and does NOT
 *  consume a second seat (the app re-activates after a reinstall). */
export async function handleLicenseActivate(request, env) {
  const body = await readBody(request);
  const key = normaliseKey(body?.key);
  const fingerprint = String(body?.fingerprint || "").trim();
  const machineName = String(body?.machineName || "").trim().slice(0, 120) || null;
  if (!key || !fingerprint) return json({ error: "bad_request" }, 400);

  const { row, error, status } = await lookupLicense(env, key);
  if (error) return json({ error }, status);

  const machines = await activationsFor(env, key);
  const already = machines.find((m) => m.fingerprint === fingerprint);
  const now = nowIso();

  if (already) {
    await env.DB.prepare(
      "UPDATE license_activations SET last_seen_at = ?1, machine_name = COALESCE(?2, machine_name) WHERE license_key = ?3 AND fingerprint = ?4",
    ).bind(now, machineName, key, fingerprint).run();
    return json(licensePayload(row, machines));
  }

  const limit = row.seats ?? SEAT_LIMIT;
  if (machines.length >= limit) {
    // 409, not 403 — the key is valid, the user just needs to free a seat. The
    // machine list is what lets the app name which Macs are holding them.
    return json({ error: "seat_limit_reached", ...licensePayload(row, machines), valid: false }, 409);
  }

  await env.DB.prepare(
    "INSERT INTO license_activations (license_key, fingerprint, machine_name, activated_at, last_seen_at) VALUES (?1,?2,?3,?4,?4)",
  ).bind(key, fingerprint, machineName, now).run();

  return json(licensePayload(row, [...machines, { fingerprint, machine_name: machineName, activated_at: now }]));
}

// ── POST /api/license/validate ────────────────────────────────────────────────

/** Re-check a license the app already holds. Called at launch and on a slow
 *  background loop. A machine that isn't activated is refused so a key can't be
 *  shared past its seat count by copying `license.json` around. */
export async function handleLicenseValidate(request, env) {
  const body = await readBody(request);
  const key = normaliseKey(body?.key);
  const fingerprint = String(body?.fingerprint || "").trim();
  if (!key || !fingerprint) return json({ error: "bad_request" }, 400);

  const { row, error, status } = await lookupLicense(env, key);
  if (error) return json({ error }, status);

  const machines = await activationsFor(env, key);
  if (!machines.some((m) => m.fingerprint === fingerprint)) {
    return json({ error: "not_activated", valid: false }, 403);
  }
  await env.DB.prepare(
    "UPDATE license_activations SET last_seen_at = ?1 WHERE license_key = ?2 AND fingerprint = ?3",
  ).bind(nowIso(), key, fingerprint).run();

  return json(licensePayload(row, machines));
}

// ── POST /api/license/deactivate ──────────────────────────────────────────────

/** Free this machine's seat so the license can move to another Mac. Idempotent
 *  — deactivating an unknown machine is a success, not an error, so a retry
 *  after a dropped response doesn't surface a scary failure. */
export async function handleLicenseDeactivate(request, env) {
  const body = await readBody(request);
  const key = normaliseKey(body?.key);
  const fingerprint = String(body?.fingerprint || "").trim();
  if (!key || !fingerprint) return json({ error: "bad_request" }, 400);

  await env.DB.prepare(
    "DELETE FROM license_activations WHERE license_key = ?1 AND fingerprint = ?2",
  ).bind(key, fingerprint).run();

  const machines = await activationsFor(env, key);
  return json({ ok: true, seatsUsed: machines.length, seats: SEAT_LIMIT });
}

// ── Issuance ──────────────────────────────────────────────────────────────────

/** Create (or return) the license for a paid order. Idempotent on order_id so a
 *  webhook retry can't mint a second key for one purchase. Keyed by email as
 *  well: buying twice with the same address extends the SAME license rather
 *  than stranding the user with two keys and two seat pools. */
async function issueLicense(env, { email, orderId, subscriptionId, expiresAt }) {
  if (!email || !orderId) return null;
  const dup = await env.DB.prepare(
    "SELECT license_key FROM license_orders WHERE order_id = ?1",
  ).bind(orderId).first();
  if (dup) return null; // retry — already issued

  const now = nowIso();
  const existing = await env.DB.prepare(
    "SELECT key FROM licenses WHERE email = ?1 AND status != 'revoked'",
  ).bind(email).first();

  let key;
  if (existing) {
    key = existing.key;
    await env.DB.prepare(
      "UPDATE licenses SET status = 'active', expires_at = ?1, subscription_id = COALESCE(?2, subscription_id), updated_at = ?3 WHERE key = ?4",
    ).bind(expiresAt || null, subscriptionId || null, now, key).run();
  } else {
    key = makeLicenseKey();
    await env.DB.prepare(
      "INSERT INTO licenses (key, email, order_id, subscription_id, status, seats, expires_at, created_at, updated_at) VALUES (?1,?2,?3,?4,'active',?5,?6,?7,?7)",
    ).bind(key, email, orderId, subscriptionId || null, SEAT_LIMIT, expiresAt || null, now).run();
  }
  await env.DB.prepare(
    "INSERT INTO license_orders (order_id, license_key, created_at) VALUES (?1,?2,?3)",
  ).bind(orderId, key, now).run();
  return key;
}

// ── POST /api/license/webhook/lemonsqueezy ────────────────────────────────────

/** Mint + email a license on purchase; track renewal/expiry for subscriptions.
 *  Signature verification and the Resend sender are shared with the AI credits
 *  webhook rather than duplicated — one copy of the security-sensitive code. */
export async function handleLicenseWebhook(request, env, ctx) {
  if (!env.LEMONSQUEEZY_WEBHOOK_SECRET) return json({ error: "webhook_unconfigured" }, 503);
  const raw = await request.text();
  const sig = request.headers.get("x-signature") || "";
  if (!(await verifyLsSignature(env.LEMONSQUEEZY_WEBHOOK_SECRET, raw, sig))) {
    return json({ error: "bad_signature" }, 401);
  }
  let payload;
  try { payload = JSON.parse(raw); } catch { return json({ error: "bad_json" }, 400); }

  const event = request.headers.get("x-event-name") || payload?.meta?.event_name || "";
  const attr = payload?.data?.attributes || {};
  const wanted = licenseVariantIds(env);

  // Subscription lifecycle: keep `expires_at` in step with LS so a lapsed
  // subscription stops validating without us running our own billing clock.
  if (event.startsWith("subscription_")) {
    const subId = String(payload?.data?.id ?? "");
    if (!subId) return json({ ok: true, skipped: "no_subscription_id" });
    if (event === "subscription_expired" || event === "subscription_cancelled") {
      // `cancelled` still runs to the end of the paid period — record the end
      // date rather than revoking immediately, or we'd cut off time paid for.
      const endsAt = attr.ends_at || attr.renews_at || nowIso();
      await env.DB.prepare(
        "UPDATE licenses SET expires_at = ?1, updated_at = ?2 WHERE subscription_id = ?3",
      ).bind(endsAt, nowIso(), subId).run();
      return json({ ok: true, event, subscription: subId });
    }
    if (attr.renews_at) {
      await env.DB.prepare(
        "UPDATE licenses SET expires_at = ?1, status = 'active', updated_at = ?2 WHERE subscription_id = ?3",
      ).bind(attr.renews_at, nowIso(), subId).run();
    }
    return json({ ok: true, event, subscription: subId });
  }

  if (event !== "order_created") return json({ ok: true, ignored: event });

  // Only OUR product. LS fans every store event out to every webhook, so an AI
  // credits order lands here too — minting a license for it would give away Pro.
  const variant = orderVariantId(attr);
  if (wanted.length && !wanted.includes(variant)) {
    return json({ ok: true, skipped: "other_product", variant });
  }
  if (!wanted.length) {
    // Fail CLOSED: without the allow-list we cannot tell a license order from a
    // credits order, and guessing wrong hands out free Pro.
    console.log("[license] LS_LICENSE_VARIANT_IDS unset — refusing to mint");
    return json({ error: "variant_allowlist_unconfigured" }, 503);
  }

  const orderId = String(payload?.data?.id ?? attr.identifier ?? "");
  const email = (attr.user_email || attr.email || "").trim().toLowerCase();
  const paid = attr.status === "paid" || attr.status === "active" || !attr.status;
  if (!paid || !email || !orderId) return json({ ok: true, skipped: true });

  const key = await issueLicense(env, {
    email,
    orderId,
    subscriptionId: attr.subscription_id ? String(attr.subscription_id) : null,
    expiresAt: attr.renews_at || null,
  });
  if (key && env.RESEND_API_KEY) ctx.waitUntil(sendLicenseEmail(env, email, key));
  return json({ ok: true });
}

/** Email the buyer their license key + how to enter it. */
async function sendLicenseEmail(env, email, key) {
  const html = `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Inter,Helvetica,Arial,sans-serif;color:#111;max-width:520px;margin:0 auto;padding:24px">
    <h2 style="margin:0 0 12px">Your Nomima Pro license</h2>
    <p style="font-size:14px;line-height:1.6;color:#333">Thanks for buying Nomima Pro — this unlocks every AI feature: Summon, inline AI editing, and the MCP server.</p>
    <p style="font-size:14px;line-height:1.6;color:#333">Enter this key in Nomima → <strong>Settings → License</strong>:</p>
    <p style="font-family:ui-monospace,Menlo,monospace;font-size:16px;letter-spacing:0.04em;background:#f4f4f5;border:1px solid #e4e4e7;border-radius:8px;padding:12px 14px;word-break:break-all">${key}</p>
    <p style="font-size:13px;line-height:1.6;color:#333">Your license covers <strong>${SEAT_LIMIT} Macs</strong> at once. Moving to a new machine? Deactivate the old one in Settings → License to free a seat.</p>
    <p style="font-size:12.5px;line-height:1.6;color:#666">Keep this key safe. Need help? Just reply to this email.</p>
    <p style="font-size:12px;color:#999;margin-top:24px">© 2026 Nomima · Private. Offline. Yours.</p>
  </body></html>`;
  const text = [
    "Your Nomima Pro license",
    "",
    "Enter this key in Nomima → Settings → License:",
    "",
    key,
    "",
    `Your license covers ${SEAT_LIMIT} Macs at once. Moving to a new machine?`,
    "Deactivate the old one in Settings → License to free a seat.",
    "",
    "Need help? Just reply to this email.",
  ].join("\n");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ from: EMAIL_FROM, to: [email], reply_to: EMAIL_REPLY_TO, subject: "Your Nomima Pro license key", html, text }),
    });
    if (!res.ok) console.log(`[license] email ${res.status}: ${(await res.text()).slice(0, 200)}`);
  } catch (e) { console.log(`[license] email failed: ${e}`); }
}
