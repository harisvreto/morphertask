CREATE TABLE "Numbers" (
    "id" INT NOT NULL PRIMARY KEY,
    "number" INT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "Numbers" ("id", "number", "createdAt", "updatedAt") VALUES (1, 0, current_timestamp, current_timestamp)