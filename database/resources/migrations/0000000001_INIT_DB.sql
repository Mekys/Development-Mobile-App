CREATE TABLE IF NOT EXISTS "role" (
  "Id" uuid PRIMARY KEY,
  "Name" text,
  "Description" text
);

CREATE TABLE IF NOT EXISTS "role_studorg" (
  "UserId" uuid,
  "StudOrgId" uuid,
  "RoleId" uuid,
  PRIMARY KEY ("UserId", "StudOrgId", "RoleId")
);

CREATE TABLE IF NOT EXISTS "studorg" (
  "Id" uuid PRIMARY KEY,
  "Name" text,
  "Description" text
);

CREATE TABLE IF NOT EXISTS "user_studorg" (
  "UserId" uuid,
  "StudOrgId" uuid,
  PRIMARY KEY ("UserId", "StudOrgId")
);

CREATE TABLE IF NOT EXISTS "user" (
  "Id" uuid PRIMARY KEY,
  "Password" text,
  "Email" text,
  "Surname" text,
  "Name" text,
  "MiddleName" text,
  "PhoneNumber" text,
  "AdmissionYear" integer,
  "StudyProgram" text,
  "Socials" text
);

CREATE TABLE IF NOT EXISTS "event_user" (
  "UserId" uuid,
  "EventId" uuid,
  PRIMARY KEY ("UserId", "EventId")
);

CREATE TABLE IF NOT EXISTS "event" (
  "Id" uuid PRIMARY KEY,
  "Name" text,
  "Description" text,
  "StudOrgId" uuid
);

CREATE TABLE IF NOT EXISTS "timestamps" (
  "Id" uuid PRIMARY KEY,
  "EventId" uuid,
  "StartTime" timestamp,
  "EndTime" timestamp,
  "Description" text
);

CREATE TABLE IF NOT EXISTS "summaries" (
  "Id" uuid PRIMARY KEY,
  "EventId" uuid,
  "Description" text,
  "VisitorAmount" integer
);

CREATE TABLE IF NOT EXISTS  "album" (
  "Id" uuid PRIMARY KEY,
  "Name" text,
  "Description" text,
  "SummariesId" uuid
);

ALTER TABLE "role_studorg" ADD FOREIGN KEY ("RoleId") REFERENCES "role" ("Id");

ALTER TABLE "role_studorg" ADD FOREIGN KEY ("UserId") REFERENCES "user" ("Id");

ALTER TABLE "role_studorg" ADD FOREIGN KEY ("StudOrgId") REFERENCES "studorg" ("Id");

ALTER TABLE "user_studorg" ADD FOREIGN KEY ("UserId") REFERENCES "user" ("Id");

ALTER TABLE "user_studorg" ADD FOREIGN KEY ("StudOrgId") REFERENCES "studorg" ("Id");

ALTER TABLE "event_user" ADD FOREIGN KEY ("UserId") REFERENCES "user" ("Id");

ALTER TABLE "event_user" ADD FOREIGN KEY ("EventId") REFERENCES "event" ("Id");

ALTER TABLE "event" ADD FOREIGN KEY ("StudOrgId") REFERENCES "studorg" ("Id");

ALTER TABLE "summaries" ADD FOREIGN KEY ("EventId") REFERENCES "event" ("Id");

ALTER TABLE "timestamps" ADD FOREIGN KEY ("EventId") REFERENCES "event" ("Id");

ALTER TABLE "album" ADD FOREIGN KEY ("SummariesId") REFERENCES "summaries" ("Id");
