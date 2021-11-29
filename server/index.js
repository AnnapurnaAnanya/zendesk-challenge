const express = require('express')
const router  = express.Router()
const tickets = require("./routes/tickets");
const oneticket = require("./routes/oneticket");
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

app.use("/tickets", tickets);
app.use("/oneticket", oneticket);
const port = 3001;
var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app