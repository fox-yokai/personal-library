DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;

-- tells mysql that we are going to start interacting with library_db
USE library_db;

CREATE TABLE authors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL
);

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  coverPhoto VARCHAR(255),
  authorId INT NOT NULL,
  FOREIGN KEY (authorId) REFERENCES authors(id) ON DELETE CASCADE
);

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  note VARCHAR(255) NOT NULL,
  bookId INT NOT NULL,
  FOREIGN KEY (bookId) REFERENCES books(id)
);