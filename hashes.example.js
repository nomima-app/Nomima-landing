// hashes.example.js — TEMPLATE. Copy to hashes.js (which is gitignored) for LOCAL
// testing only. In production, GitHub Actions generates hashes.js automatically
// from the NOMIMA_ACCESS_CODES repository secret (see .github/workflows/deploy.yml),
// so you never commit real codes or hashes.
//
// To make a hash for a local test code:
//   echo -n "your-test-code" | shasum -a 256
// then paste the hex string below.

window.__NOMIMA_HASHES__ = [
  // "f8b949d15bc5c4f11b37fe65f8554cfe70943bd237b38714e1dfe1be93816c4b", // example
];
