const express = require("express");
const path = require("path");
require("./db/connect.js")

const app = express();
const port = process.env.PORT || 8000
const staticPath = path.join(`${__dirname}/../public`)

app.use(express.static(staticPath))
app.set("view engine" , "hbs")

app.get("/" , (req , res) => {
    res.render('index')
})

app.listen(port , () => {
    console.log(`I am running on port ${port}`);
})