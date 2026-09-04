CREATE TABLE feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  verbatim TEXT NOT NULL,
  recommendation TEXT NOT NULL,
  context TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  owner_note TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TEXT
);
CREATE INDEX idx_feedback_status_created ON feedback(status, created_at DESC);
