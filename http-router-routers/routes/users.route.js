const express = require('express')
const router = express.Router()


router.get("", (req, res) => {
    res.send("get-Akash");
})

router.get("/about", (req, res) => {
    res.send("<h1>About-Akash</h1>");
})

router.get("/contact", (req, res) => {
    res.send("<h1>get-Contact</h1>");
})

router.get("/login", (req, res) => {
    res.send("<h1>get-Login</h1>");
})


module.exports = router;