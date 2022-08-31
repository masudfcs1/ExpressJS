const express = require('express');
const app = express();
const hostname = '127.0.0.1';


app.get("", (req, res) => {
    res.send("get-Akash");
})

app.get("/about", (req, res) => {
    res.send("<h1>About-Akash</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>get-Contact</h1>");
})

app.get("/login", (req, res) => {
    res.send("<h1>get-Login</h1>");
})

module.exports = app;