const express = require('express') //parece ser inutil
const router = require('./router')
const cors = require('cors');

const app = express()


app.use(cors())
app.use(express.json())
app.use(router)


module.exports = app;