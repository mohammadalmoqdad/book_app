# book_app

* 1606913266277 
<!--I started working -->

* 1606972211860
<!-- CREATE DATABASE lab14; -->
<!-- create the another database to move the work inside it -->

* 1606972301197
<!-- CREATE DATABASE lab14_normal WITH TEMPLATE lab14; -->
<!-- this query for creating copy of the table to work with it  -->

#### Database Migration

* 1606972508052
<!-- CREATE TABLE AUTHORS (id SERIAL PRIMARY KEY, name VARCHAR(255)); -->
<!-- This query will create a second table in the lab14_normal database named authors -->

* 1606972565796
<!-- INSERT INTO authors(name) SELECT DISTINCT author FROM books; -->
<!-- his query will use a simple subquery to retrieve unique author values from the books table and insert each one into the authors table in the name column. -->

* 1606972633796
<!--  ALTER TABLE books ADD COLUMN author_id INT; -->
<!-- this query for adding column to the table auther named auther_id -->

* 1606972821698
<!-- UPDATE books SET author_id=author.id FROM (SELECT * FROM authors) AS author WHERE books.author = author.name; -->
<!-- this query for storing the values from the  -->


* 1606972855988
<!-- ALTER TABLE books DROP COLUMN author; -->
<!-- his query will modify the books table by removing the column named author. Now that the books table contains a author_id column which will become a foreign key, your table does not need to contain a string representing each author. -->

* 1606972905528
<!-- ALTER TABLE books ADD CONSTRAINT fk_authors FOREIGN KEY (author_id) REFERENCES authors(id); -->
<!-- This query will modify the data type of the author_id in the books table, setting it as a foreign key which references the primary key in the authors table. Now PostgreSQL knows HOW these 2 tables are connected. -->























