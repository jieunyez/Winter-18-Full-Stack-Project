var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var booksRouter = require('./routes/api/books');
var bodyParser = require('body-parser');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/books', booksRouter);

const db = mongoose.connect('mongodb://dbadmin:winter2019@ds247944.mlab.com:47944/cmsc388_winter_2019', { useNewUrlParser: true });

module.exports = app;
