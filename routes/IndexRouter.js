const express = require('express')
const app = express()

// Routers Config

// General Routers for internal use 
app.use('/api/v1/', require('./gateway.js'));

module.exports = app;