const express = require('express');

//install app
const app = express();

//route
app.get('/', (req, res) => {
    res.send("Hello, world!");
})






//exporting app
module.exports = app;
