DROP DATABASE IF EXISTS otTopTen;
CREATE DATABASE otTopTen CHARACTER SET utf8;
use otTopTen;
DROP USER IF EXISTS 'ttUser'@'localhost';
CREATE USER 'ttUser'@'localhost' IDENTIFIED BY '12345';
GRANT INSERT, SELECT ON otTopTen.* TO 'ttUser'@'localhost';
DROP TABLE IF EXISTS otTopTen;
CREATE TABLE otTopTen
(id integer not null primary key auto_increment, 
playerName varchar(20), playerScore integer, ttDate date);

INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Kenny', 200, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Daniel', 100, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('David', 120, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Beatriz', 180, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('John', 210, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Ryan', 170, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Andy', 160, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Brenda', 60, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Laura', 20, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Mike', 90, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Brian', 250, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Dave', 150, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Kennyy', 125, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Diana', 185, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Jozi', 215, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Anthony', 172, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Nick', 164, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Tessa', 62, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Lori', 25, '2018-11-19');
INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('Steve', 97, '2018-11-19');