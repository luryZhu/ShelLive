"use strict";

var express = require('express');

var cors = require('cors');

var router = require('./router'); // parsing-body


var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use('/api', router);
app.listen(3001, function () {
  console.log("server running at: http://127.0.0.1:3001/api");
});