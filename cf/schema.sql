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

-- Device telemetry + access control (added for remote kill-switch).

CREATE TABLE IF NOT EXISTS device_checkins (
  fingerprint    TEXT PRIMARY KEY,
  first_seen     TEXT NOT NULL,
  last_seen      TEXT NOT NULL,
  version        TEXT,
  ip_country     TEXT,
  checkin_count  INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS blocked_devices (
  fingerprint  TEXT PRIMARY KEY,
  blocked_at   TEXT NOT NULL,
  reason       TEXT
);
