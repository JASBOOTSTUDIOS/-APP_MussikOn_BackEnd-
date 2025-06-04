CREATE TABLE "users" (
  "id" UUID PRIMARY KEY,
  "full_name" varchar,
  "email" varchar UNIQUE,
  "password_hash" varchar,
  "phone" varchar,
  "location" varchar,
  "photo_url" text,
  "biography" text,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "typeUser" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "description" text
);

CREATE TABLE "roles" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "description" text
);

CREATE TABLE "user_roles" (
  "id" int PRIMARY KEY,
  "user_id" UUID,
  "role_id" int
);

CREATE TABLE "user_typeUser" (
  "id" int PRIMARY KEY,
  "user_id" UUID,
  "typeUser_id" int
);

CREATE TABLE "musician_profiles" (
  "id" UUID PRIMARY KEY,
  "user_id" UUID UNIQUE,
  "experience_years" int,
  "available" boolean,
  "price_range_min" decimal,
  "price_range_max" decimal
);

CREATE TABLE "organizer_profiles" (
  "id" UUID PRIMARY KEY,
  "user_id" UUID UNIQUE,
  "company_name" varchar,
  "verified" boolean
);

CREATE TABLE "genres" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "description" text
);

CREATE TABLE "instruments" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "description" text
);

CREATE TABLE "user_genres" (
  "id" int PRIMARY KEY,
  "user_id" UUID,
  "genre_id" int
);

CREATE TABLE "user_instruments" (
  "id" int PRIMARY KEY,
  "user_id" UUID,
  "instrument_id" int
);

CREATE TABLE "events" (
  "id" UUID PRIMARY KEY,
  "organizer_id" UUID,
  "title" varchar,
  "description" text,
  "location" varchar,
  "date" date,
  "time" time,
  "budget" decimal,
  "is_public" boolean,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "event_requests" (
  "id" UUID PRIMARY KEY,
  "event_id" UUID,
  "musician_id" UUID,
  "status" varchar,
  "sent_at" timestamp,
  "responded_at" timestamp
);

CREATE TABLE "contracts" (
  "id" UUID PRIMARY KEY,
  "event_id" UUID,
  "musician_id" UUID,
  "confirmed_by_musician" boolean,
  "confirmed_by_organizer" boolean,
  "payment_status" varchar,
  "notes" text,
  "created_at" timestamp
);

CREATE TABLE "reviews" (
  "id" UUID PRIMARY KEY,
  "reviewer_id" UUID,
  "reviewed_user_id" UUID,
  "rating" int,
  "comment" text,
  "created_at" timestamp
);

CREATE TABLE "notifications" (
  "id" UUID PRIMARY KEY,
  "user_id" UUID,
  "title" varchar,
  "message" text,
  "type" varchar,
  "is_read" boolean,
  "created_at" timestamp
);

CREATE TABLE "media_files" (
  "id" UUID PRIMARY KEY,
  "user_id" UUID,
  "file_url" text,
  "file_type" varchar,
  "description" text,
  "uploaded_at" timestamp
);

CREATE TABLE "event_genres" (
  "id" int PRIMARY KEY,
  "event_id" UUID,
  "genre_id" int
);

CREATE TABLE "event_instruments" (
  "id" int PRIMARY KEY,
  "event_id" UUID,
  "instrument_id" int
);

ALTER TABLE "user_roles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_roles" ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("id");

ALTER TABLE "user_typeUser" ADD FOREIGN KEY ("typeUser_id") REFERENCES "typeUser" ("id");

ALTER TABLE "user_typeUser" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "musician_profiles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "organizer_profiles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_genres" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_genres" ADD FOREIGN KEY ("genre_id") REFERENCES "genres" ("id");

ALTER TABLE "user_instruments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_instruments" ADD FOREIGN KEY ("instrument_id") REFERENCES "instruments" ("id");

ALTER TABLE "events" ADD FOREIGN KEY ("organizer_id") REFERENCES "users" ("id");

ALTER TABLE "event_requests" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "event_requests" ADD FOREIGN KEY ("musician_id") REFERENCES "users" ("id");

ALTER TABLE "contracts" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "contracts" ADD FOREIGN KEY ("musician_id") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("reviewer_id") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("reviewed_user_id") REFERENCES "users" ("id");

ALTER TABLE "notifications" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "media_files" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "event_genres" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "event_genres" ADD FOREIGN KEY ("genre_id") REFERENCES "genres" ("id");

ALTER TABLE "event_instruments" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id");

ALTER TABLE "event_instruments" ADD FOREIGN KEY ("instrument_id") REFERENCES "instruments" ("id");
