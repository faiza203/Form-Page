const express = require("express");
require("./db/connect.js")

const app = express();
const port = process.env.PORT || 8000

app.get("/" , (req , res) => {
    res.send("Home")
})

app.listen(port , () => {
    console.log(`I am running on port ${port}`);
})