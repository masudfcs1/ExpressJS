const express = require('express')
const morgan = require("morgan")
const mongoose = require('mongoose')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.json({
//         message: 'I am not Route'
//     })
// })

// app.get('/', function(req, res) {
//     console.log("Cookies: ", req.cookies)
// })
// app.listen(8081)


mongoose.connect('mongodb://localhost:27017/test', { useNewUrParser: true });

.then(() => {
    app.listen(4545, () => {
        console.log("Application is ready.")
    })
})

// .then(() => {
//     app.listen(4545, () => {
//         console.log('Application For Ready.');
//     })
// })

// .catch(e => {
//     console.log(e);
// })