const express = require('express')

const numberRouter = require('./number.router')

const app = express()

app.use('/number', numberRouter)

module.exports = app
