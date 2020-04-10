const express = require('express');
const router = express.Router();

const Notes = require("../models/notes");

router.get('/api/book/notes/:name', (req, res) => {
    const bookName = req.params.name;

    Notes.getBookNotes(bookName)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error))
  })

router.post('/api/book/note', (req, res) => {
    const { note, bookId } = req.body;

    Notes.addBookNote(note, bookId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  })

router.delete('/api/note/:id', (req, res) => {
    let id = req.params.id

    Notes.deleteNote(id)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  })