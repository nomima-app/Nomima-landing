// Shared Lemon Squeezy + response plumbing, used by BOTH paid products:
// Nomima AI credits (`ai.js`) and Pro licenses (`license.js`).
//
// It lives in its own module for two reasons. The signature check is
// security-sensitive and must exist exactly once — a second copy is a second
// thing to get subtly wrong. And LS delivers every store event to every
// configured webhook, so both handlers need the same variant-id filter to tell
// the two products apart; putting it in either handler would make the other
// import from it and create a cycle.

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export const EMAIL_FROM = "Nomima <hello@nomima.io>";
export const EMAIL_REPLY_TO = "support@nomima.io";

/** Verify the Lemon Squeezy `X-Signature` (hex HMAC-SHA256 of the raw body with
 *  the store's webhook signing secret), constant-time. */
export async function verifyLsSignature(secret, rawBody, signatureHex) {
  if (!secret || !signatureHex) return false;
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(rawBody));
  const expected = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
  if (expected.length !== signatureHex.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ signatureHex.charCodeAt(i);
  return diff === 0;
}

/** Variant ids that mean "Pro license" rather than an AI credit top-up.
 *  Configured as a comma-separated env var so adding a plan needs no deploy of
 *  new code, just a var change. */
export function licenseVariantIds(env) {
  return String(env.LS_LICENSE_VARIANT_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** The variant id on an LS order payload (first order item). */
export function orderVariantId(attr) {
  const item = attr?.first_order_item || {};
  return String(item.variant_id ?? attr?.variant_id ?? "");
}
