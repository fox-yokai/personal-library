INSERT INTO authors (firstName, lastName) VALUES ('J. K.', 'Rowling');
INSERT INTO authors (firstName, lastName) VALUES ('Mark', 'Twain');

INSERT INTO books (title, authorId, coverPhoto) VALUES ("Harry Potter and the Sorcerer\'s Stone", 1, 'https://m.media-amazon.com/images/I/41lnLrvBnML.jpg');

INSERT INTO books (title, authorId, coverPhoto) VALUES ('Harry Potter and the Chamber of Secrets', 1, 'https://m.media-amazon.com/images/I/51OZerWcGCL.jpg');

SELECT firstName, lastName, title 
FROM authors
INNER JOIN books
ON authors.id = books.authorId