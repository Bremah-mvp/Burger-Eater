-- add values to our database
USE burgers_db;

INSERT INTO burgers  (burger_name, devoured, dt) 
VALUES ('burgerKing Jr', false, CURRENT_TIMESTAMP)
, ('BaconKing', false, CURRENT_TIMESTAMP)
, ('Whopper Burger', false, CURRENT_TIMESTAMP);