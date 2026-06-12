-- Nomima landing backend — leads + single-use download tokens.

CREATE TABLE IF NOT EXISTS leads (
  email       TEXT PRIMARY KEY,
  created_at  TEXT NOT NULL,
  source      TEXT,
  ip_country  TEXT,
  confirmed   INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS download_tokens (
  token       TEXT PRIMARY KEY,
  email       TEXT NOT NULL,
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  used_at     TEXT,
  ip_country  TEXT
);

CREATE INDEX IF NOT EXISTS idx_tokens_email ON download_tokens(email);
CREATE INDEX IF NOT EXISTS idx_tokens_expires ON download_tokens(expires_at);
