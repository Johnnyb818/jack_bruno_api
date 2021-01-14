const express = require('express')
const videos = express.Router()
const Video = require("../models/video.js")


// INDEX

videos.get("/", (req,res)=>{
    Video.find({},(err,foundVideo)=>{
        if(err) {
            res.status(400).json({error:err.message})
        }
        res.status(200).json(foundVideo)
    })
})









module.exports = videos