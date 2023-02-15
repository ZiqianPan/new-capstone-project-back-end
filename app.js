//importing express library
const express = require("express");
const cors = require("cors");
//init express application
const app = express();

const studentsController = require("./controllers/studentsController");

app.use(cors());

app.use('/students', studentsController);
//route health check.
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
