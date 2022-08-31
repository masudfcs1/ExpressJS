// const express = require('express');
// const app = express();
const hostname = '127.0.0.1';
const app = require('./app')
const port = 3000;



app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
})