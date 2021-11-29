var express = require('express');
var app = express();
const cors = require('cors');


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


module.exports = app;