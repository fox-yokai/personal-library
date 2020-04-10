const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
const apiBooksRoutes = require("./controllers/booksController");
// const apiNotesRoutes = require("./controllers/notesController");
// const htmlRoutes = require("./controllers/htmlController.js");

app.use(apiBooksRoutes);
// app.use(apiNotesRoutes);
// app.use(htmlRoutes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});