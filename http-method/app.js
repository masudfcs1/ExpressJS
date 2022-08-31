const express = require('express');
const app = express();
const hostname = '127.0.0.1';

app.get("/", (req, res) => {
    res.send(" Akash")
})



app.post("/", (req, res) => {
    res.send("post_Akash")
})



app.delete("/", (req, res) => {
    res.send(" Delete-Akash")
})


app.put("/", (req, res) => {
    res.send("put-Akash")
})


module.exports = app;