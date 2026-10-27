-- Site-wide totals: one row each for 'site_uv' (visitors) and 'site_pv' (page views).
CREATE TABLE IF NOT EXISTS totals (
  key TEXT PRIMARY KEY,
  n   INTEGER NOT NULL DEFAULT 0
);

-- Page views per path.
CREATE TABLE IF NOT EXISTS pages (
  path TEXT PRIMARY KEY,
  pv   INTEGER NOT NULL DEFAULT 0
);

-- Salted visitor hashes for the current and previous UTC day, used to count a visitor once per day.
CREATE TABLE IF NOT EXISTS seen (
  day  TEXT NOT NULL,
  hash TEXT NOT NULL,
  PRIMARY KEY (day, hash)
) WITHOUT ROWID;
