//importing express library
const express = require("express");
const cors = require("cors");
//init express application
const app = express();

const studentsController = require("./controllers/studentsController");
const studentsControllerV2 = require("./controllers/v2/studentsControllerV2");

app.use(cors());

app.use('/students', studentsController);
app.use('/v2/students', studentsControllerV2);
//route health check.
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
