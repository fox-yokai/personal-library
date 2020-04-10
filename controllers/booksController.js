const express = require('express');
const router = express.Router();

const Books = require("../models/books");

router.get("/api/book", (req, res) => {
    Books.selectAll()
    .then(results => res.json(results))
    .catch(error => res.json(error))
})

router.get("/api/book/:name", (req, res) => {
    const bookTitle = req.params.name;
    Books.getOneBook(bookTitle)
    .then(results => res.json(results))
    .catch(error => res.json(error))
})

// cant determine if this route is working in Postman
router.post('/api/book/new', (req, res) => {
    const { title, coverPhoto, authorId } = req.body;

    Books.addBook(title, coverPhoto, authorId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  });

module.exports = router;