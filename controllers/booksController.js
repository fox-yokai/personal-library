const express = require('express');
const router = express.Router();

const Books = require("../models/books");

router.get("/api/books", (req, res) => {
    Books.selectAll()
    .then(results => res.json(results))
    .catch(error => res.json(error))
})

module.exports = router;