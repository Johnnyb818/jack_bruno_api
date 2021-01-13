const express = require('express')
const app = express()
















//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })