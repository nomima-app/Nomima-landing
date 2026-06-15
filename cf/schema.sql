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
  checkin_count  INTEGER NOT NULL DEFAULT 1,
  -- Geo + hardware detail (added to prod via ALTER; documented here so a fresh
  -- database matches production and the admin dashboard's query resolves).
  city           TEXT,
  region         TEXT,
  os_version     TEXT,
  hw_model       TEXT,
  hw_name        TEXT,
  chip           TEXT,
  memory         TEXT,
  cpu_cores      TEXT
);

CREATE TABLE IF NOT EXISTS blocked_devices (
  fingerprint  TEXT PRIMARY KEY,
  blocked_at   TEXT NOT NULL,
  reason       TEXT
);

-- Bug reports — one row per reported bug. Multiple bugs filed together share a
-- batch_id. Only title + severity + status + dates are ever shown on the public
-- board; description / email / diagnostics / screenshots stay admin-only.
-- public_hidden = 1 pulls a report off the public board (spam / PII).
CREATE TABLE IF NOT EXISTS bug_reports (
  id              TEXT PRIMARY KEY,
  batch_id        TEXT NOT NULL,
  source          TEXT,                       -- 'app' | 'web'
  fingerprint     TEXT,                        -- machine id (app source) for rate limiting
  title           TEXT NOT NULL,
  description     TEXT NOT NULL,
  severity        TEXT,                        -- low | medium | high | crash
  area            TEXT,
  email           TEXT,
  app_version     TEXT,
  os              TEXT,
  ip_country      TEXT,
  status          TEXT NOT NULL DEFAULT 'new', -- new|triaged|confirmed|in-progress|fixed|wontfix
  public_hidden   INTEGER NOT NULL DEFAULT 0,
  admin_notes     TEXT,
  diagnostics_key TEXT,                        -- R2 key for the diagnostics blob
  created_at      TEXT NOT NULL,
  updated_at      TEXT
);
CREATE INDEX IF NOT EXISTS idx_bugs_status  ON bug_reports(status);
CREATE INDEX IF NOT EXISTS idx_bugs_created ON bug_reports(created_at);
CREATE INDEX IF NOT EXISTS idx_bugs_public  ON bug_reports(public_hidden, created_at);
CREATE INDEX IF NOT EXISTS idx_bugs_batch   ON bug_reports(batch_id);

CREATE TABLE IF NOT EXISTS bug_attachments (
  id           TEXT PRIMARY KEY,
  bug_id       TEXT NOT NULL,
  r2_key       TEXT NOT NULL,
  filename     TEXT,
  content_type TEXT,
  size         INTEGER,
  created_at   TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_attach_bug ON bug_attachments(bug_id);

-- Sliding-window rate limit keyed by fingerprint (app) or hashed IP (web).
CREATE TABLE IF NOT EXISTS bug_rate (
  key           TEXT PRIMARY KEY,
  window_start  TEXT NOT NULL,
  count         INTEGER NOT NULL DEFAULT 0
);
