const express = require("express");
const app = express();
const port = 3000;

app.get("/signup", (req, res) => {
  return res.send("You are ready to signup!");
});

const admin = (req, res) => {
  return res.send("this is admin dashboard");
};


const isLoggedIn = (req,res, next) => {
    console.log("User has logged in");
    next();
}

const isAdmin = (req,res, next) => {
    console.log("Admin is running");
    next();
}


app.get("/admin",isLoggedIn, isAdmin, admin);

app.get("/login", (req, res) => {
  return res.send("You are ready to login!");
});

app.get("/user", (req, res) => {
  return res.send("You are a new user!");
});

app.listen(port, () => {
  console.log("Server is running");
});
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
