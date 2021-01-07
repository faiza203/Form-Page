const express = require("express");
const path = require("path");
require("./db/connect.js")

const app = express();
const port = process.env.PORT || 8000
const staticPath = path.join(`${__dirname}/../public`)

app.use(express.static(staticPath))
console.log(staticPath);
app.get("/" , (req , res) => {
    res.sendFile('index')
})

app.listen(port , () => {
    console.log(`I am running on port ${port}`);
})