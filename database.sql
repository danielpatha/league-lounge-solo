
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "league"(
"id" SERIAL PRIMARY KEY,
"league_city_name" VARCHAR (80),
"sport" VARCHAR (80) ,
"competitive_level" VARCHAR (30),
"season" VARCHAR (30),
"day_of_the_week" VARCHAR (100),
"time_of_day" VARCHAR (30),
"co_ed" BOOLEAN DEFAULT FALSE,
"notes" VARCHAR (1000),
"link" VARCHAR (500),
"photo" VARCHAR (1000)
);

