
/* "users" table contains all registered user information. Passwords are hashed out. */

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR(250) NOT NULL,
"email" VARCHAR(250) NOT NULL,
"password" VARCHAR(250) NOT NULL,
"phone" VARCHAR(250)
);

/* "collections" table contains all user editable information. It's keyed to the "users"
table through the "user_id" row. */

CREATE TABLE "collections" (
"id" SERIAL PRIMARY KEY,
"user_id" VARCHAR(250) NOT NULL,
"item_name" VARCHAR(250) NOT NULL,
"item_model" VARCHAR(250),
"item_detail" VARCHAR(250),
"item_location" VARCHAR(250),
"item_image" VARCHAR (250),
"item_price" VARCHAR(250),
"list_master" BOOLEAN DEFAULT 'false',
"list_forsale" BOOLEAN DEFAULT 'false',
"list_wish" BOOLEAN DEFAULT 'false'
);
