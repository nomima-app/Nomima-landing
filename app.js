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
// Plaintext codes are intentionally NOT in this public repo — only their hashes.
// Keep the hash→plaintext map privately (password manager). To add a code:
//   echo -n "your-code" | shasum -a 256   →  paste the hex below.
const ACCESS_CODE_HASHES = [
  "f8b949d15bc5c4f11b37fe65f8554cfe70943bd237b38714e1dfe1be93816c4b",
  "5ebe49e027e5af662cbed476ba4492ab02ebf7cdd2d7a6d6fabe9247f12363e5",
  "8f554c2baa00e779cea28e8874295fbd945ac8111ce290ee99d735c34b996f17",
  "5a612b55a4b7e2dd53b66a3850cfdd9fc8e75ff77b9f69520541faa9645dbf20",
  "337499e37408a4d33d2e83e058951ce6e576ad5bfd38030c81ec92e330e1c176",
  "01229c47e9ebfafe14aa89eb5482895f0b1d909e6dd790dbf2ec9911801878b0",
  "53555bf955aa3d74d0b3a36db410f8ab73a8ab801634ecef9c1a27310fbd35b8",
];

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

// Already unlocked in this tab/session? Skip straight in (no code re-entry).
if (sessionStorage.getItem(SESSION_KEY) === "1") {
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
