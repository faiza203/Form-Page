const express = require("express");
const path = require("path");
const hbs = require("hbs");
const Register = require("./db/register");
const { urlencoded } = require("express");
require("./db/connect.js");

const app = express();
const port = process.env.PORT || 8000;

const staticPath = path.join(`${__dirname}/../public`);
const viewsPath = path.join(`${__dirname}/../templates/views`);
const paritalsPath = path.join(`${__dirname}/../templates/partials`);

app.use(express.json());
app.use(urlencoded({ extended: false }))
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


app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    res.send(req.body)
  } catch { console.log("ERROR 404"); }
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "Register",
  });
});

app.post("/register", async (req, res) => {
  try {
    const { name, lastName,gender, age, email, phone, password, password2 } = req.body;
    if (password !== password2) {
      res.send("Password Does Not Match")
    } else {
      const registerEmploy = new Register(
        {
          name, lastName, gender, age, email,
          phone, password, password2
        })
      const registered = await registerEmploy.save();
      res.render("index")
    }
  } catch (err){res.send(err.message)}
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
