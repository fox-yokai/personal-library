const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiBooksRoutes = require("./controllers/booksController");
const htmlRoutes = require("./controllers/htmlController.js");

app.use(apiBooksRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});