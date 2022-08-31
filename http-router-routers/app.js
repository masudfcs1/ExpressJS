const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const userRouter = require('./routes/users.route')


app.use("/api/user", userRouter)

app.use("", (req, res) => {
    res.send("<h1>URl Not Found</h1>")
})

module.exports = app;