const express = require('express')
const morgan = require("morgan")
const mongoose = require('mongoose')

const app = express()

app.use(morgan('dev'))