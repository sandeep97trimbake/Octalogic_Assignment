var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");


var indexRouter = require('./routes/index');
var vehicalRouter = require('./routes/vehical');
var customerRouter = require('./routes/customer');
var bookingRouter = require('./routes/booking');



const connectionPool = require('./DBConfig/connectionpool')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


connectionPool.init();

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/vehical', vehicalRouter);
app.use('/customer', customerRouter);
app.use('/booking', bookingRouter);

module.exports = app;
