//import the app from the app.js file. 
const app = require('./app');//this is why we need the routes. 


require("dotenv").config();

//have app listening 
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {console.log(`Listenig on ${PORT}`)})