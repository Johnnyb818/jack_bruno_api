require("dotenv").config();
const { PORT = 6000, NODE_ENV = "development" } = process.env;

//Bringing in Express
const express = require('express')
const app = express()





//OTHER IMPORTS
const morgan = require("morgan");













//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })