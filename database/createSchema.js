import db from './createConnection.js'

db.query('DROP TABLE IF EXISTS users');
db.query('DROP TABLE IF EXISTS items');
db.query('DROP TABLE IF EXISTS cart');


db.query(`CREATE TABLE users (
    id INT AUTO_INCREMENT,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY(id) )`)

 
db.query(`CREATE TABLE items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) ,
    price INT,
    image_url VARCHAR(300),
    description VARCHAR(300))`)

db.query(`CREATE TABLE cart (
    id INT PRIMARY KEY AUTO_INCREMENT,
    item_id INT ,
    user_id INT,
    FOREIGN KEY (item_id) REFERENCES items(id),
    FOREIGN KEY (user_id) REFERENCES users(id))`)
    

db.end();



