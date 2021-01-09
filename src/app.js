const express = require("express");
const path = require("path");
const hbs = require("hbs");
const register = require("./register");
require("./db/connect.js");

const app = express();
const port = process.env.PORT || 8000;

const staticPath = path.join(`${__dirname}/../public`);
const viewsPath = path.join(`${__dirname}/../templates/views`);
const paritalsPath = path.join(`${__dirname}/../templates/partials`);

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(paritalsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "Register",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`I am running on port ${port}`);
});
