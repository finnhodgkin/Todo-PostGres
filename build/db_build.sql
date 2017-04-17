BEGIN;

DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (
  id            SERIAL        PRIMARY KEY,
  name          VARCHAR(500)  NOT NULL,
  isComplete    BOOLEAN       NOT NULL
);

INSERT INTO todos (name, isComplete)
VALUES
('Testing, 1 2 3', FALSE),
('Testing, 3 2 1', TRUE);

COMMIT;
