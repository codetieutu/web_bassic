const express = require('express')
const path = require("path")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3000;

//configure template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//config static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/abc", (req, res) => {
    res.render("sample.ejs")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})