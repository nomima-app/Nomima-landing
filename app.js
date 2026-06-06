/* ===========================================================================
   Nomima landing — one-time access-code gate.

   HOW "SINGLE USE" WORKS HERE (read this — it has real limits):
   This is a fully static site, so there is NO server to globally record that a
   code was used. Each access code is therefore "single use" only in the sense
   that, once it successfully unlocks the page IN A GIVEN BROWSER, it is burned
   in that browser's localStorage and will be rejected if entered again.

   What this DOES stop: a casual visitor reusing the same code over and over, or
   passing it around a shared/kiosk machine after one use.
   What this does NOT stop: someone clearing site data, opening a different
   browser/incognito window, or a different device — there the code works again,
   because the "used" flag lives only on the client.

   For TRUE single-use (a code that dies forever after one redemption, anywhere)
   you need server-side state: a tiny backend / serverless function that marks
   the code consumed in a database. Not possible on a static, domain-only setup.

   ── Codes ──────────────────────────────────────────────────────────────────
   Only SHA-256 hashes live here, never the plaintext. Hand ONE code to each
   person. To add/rotate codes, hash a new one:
       echo -n "your-code" | shasum -a 256
   and add the hex to ACCESS_CODE_HASHES. The plaintext codes for the hashes
   below are listed in README.md.
   =========================================================================== */
// Access-code hashes are NOT committed. They are injected at deploy time from the
// NOMIMA_ACCESS_CODES GitHub secret (see .github/workflows/deploy.yml), which the
// CI hashes and writes into hashes.js as window.__NOMIMA_HASHES__. For local
// testing, create your own hashes.js (gitignored) — see hashes.example.js.
// If hashes.js is missing, the array is empty and the gate rejects every code.
const ACCESS_CODE_HASHES = Array.isArray(window.__NOMIMA_HASHES__)
  ? window.__NOMIMA_HASHES__
  : [];

// localStorage: hashes that have already been redeemed in THIS browser (burned).
const CONSUMED_KEY = "nomima_consumed_codes";
// sessionStorage: keep the current tab unlocked across refreshes without
// requiring (or re-burning) a code. Cleared when the tab closes.
const SESSION_KEY = "nomima_unlocked";

const gate = document.getElementById("gate");
const site = document.getElementById("site");
const form = document.getElementById("gate-form");
const input = document.getElementById("gate-input");
const errorEl = document.getElementById("gate-error");

function getConsumed() {
  try {
    return JSON.parse(localStorage.getItem(CONSUMED_KEY) || "[]");
  } catch {
    return [];
  }
}

function burn(hash) {
  const consumed = getConsumed();
  if (!consumed.includes(hash)) {
    consumed.push(hash);
    try {
      localStorage.setItem(CONSUMED_KEY, JSON.stringify(consumed));
    } catch {
      /* storage may be unavailable (private mode quota) — gate still reveals */
    }
  }
}

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function reveal() {
  gate.hidden = true;
  gate.setAttribute("aria-hidden", "true");
  site.hidden = false;
  // Mount the WebGL hero graph now that #kg has a measurable size.
  requestAnimationFrame(() => window.NomimaKG && window.NomimaKG.mount && window.NomimaKG.mount());
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.hidden = false;
  errorEl.classList.remove("shake");
  void errorEl.offsetWidth; // reflow so the shake can re-trigger
  errorEl.classList.add("shake");
  input.value = "";
  input.focus();
}

// Already unlocked in this tab/session, running on localhost, or using the bypass query? Skip straight in.
if (
  sessionStorage.getItem(SESSION_KEY) === "1" ||
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1" ||
  location.search.includes("bypass=1")
) {
  reveal();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const attempt = input.value.trim();
  if (!attempt) return;

  let hex;
  try {
    hex = await sha256Hex(attempt);
  } catch {
    // crypto.subtle needs a secure context (https / localhost).
    showError("This page must be opened over https to verify the code.");
    return;
  }

  if (!ACCESS_CODE_HASHES.includes(hex)) {
    showError("Incorrect access code. Please try again.");
    return;
  }
  if (getConsumed().includes(hex)) {
    showError("This code has already been used on this device.");
    return;
  }

  // Valid + unused → redeem it (single use) and let them in.
  burn(hex);
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
  reveal();
});
