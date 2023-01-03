const express = require('express');

//install app
const app = express();

const studentsController = require('./controllers/studentsController');

app.use('/students', studentsController);

//route
app.get('/', (req, res) => {
    res.send("Hello, world!");
})






//exporting app
module.exports = app;
