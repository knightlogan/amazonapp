DROP DATABASE IF EXISTS bamazon_db;

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id int NOT NULL AUTO_INCREMENT,
product_name varchar(255) NOT NULL,
department_name varchar(255),
price int,
stock_quantity int,
PRIMARY KEY (item_id)
);

INSERT INTO  products ( product_name, department_name, price, stock_quantity)
VALUES ("Nirvana record", "Music", 15, 12);

INSERT INTO  products ( product_name, department_name, price, stock_quantity)
VALUES ("Nike Shoes", "Shoes", 100, 20);

INSERT INTO  products ( product_name, department_name, price, stock_quantity)
VALUES ("t-shirt", "apparel", 10, 40);

INSERT INTO  products ( product_name, department_name, price, stock_quantity)
VALUES ("Elton John record", "Music", 10, 42);

INSERT INTO  products ( product_name, department_name, price, stock_quantity)
VALUES ("Jacket", "apparel", 15, 12);

INSERT INTO  products ( product_name, department_name, price, stock_quantity)
VALUES ("boots", "Shoes", 120, 5);

INSERT INTO  products ( product_name, department_name, price, stock_quantity)
VALUES ("Train toy", "Toys", 23, 15);

INSERT INTO  products ( product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Electronics", 500, 2);