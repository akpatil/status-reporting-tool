process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var passport = require('./config/passport');
var mongoose = require('./config/mongoose');
var db = mongoose();
var passport = passport();
var app = express();
app.listen(3000);
console.log('Server is running...');