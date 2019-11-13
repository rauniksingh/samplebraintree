const express = require('express'),
     app = express.Router(),
     { _getAuthToken } = require('../service/gateway');

/*
 * Routes Type: Protected
 */

app.get('/getAuthToken', _getAuthToken);

module.exports = app;