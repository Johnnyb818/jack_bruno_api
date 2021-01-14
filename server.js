require("dotenv").config();
const { PORT = 7000, NODE_ENV = "development" } = process.env;

//Bringing in Express
const express = require('express')
const app = express()


// MONGO Connection
const mongoose = require('./DB/conn')

// CORS
const cors = require("cors")



//OTHER IMPORTS
const morgan = require("morgan");


// MIDDLEWARE
NODE_ENV === "production" ? app.use(cors()) : app.use(cors());
app.use(cors())
app.use(express.json());
app.use(morgan("tiny")); //logging


//Controllers
const videoController = require("./controllers/videos.js")

app.use("/videos", videoController)






//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })