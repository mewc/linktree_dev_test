var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const debug = require('debug')('server:debug');
const config = require('config');

var indexRouter = require('./routes/index');
var linkRouter = require('./routes/link');
var mockRouter = require('./routes/mock');

const jsonErrorHandler = async (err, req, res, next) => {
  debug(err);
  res.setHeader('Content-type', 'application/json');
  res.status(err.status || 500).send({
    message: err.message,
    statusCode: err.status
  });
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger(config.name));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mock', mockRouter);
app.use('/link', linkRouter);


// error handler
app.use(jsonErrorHandler);


const listen = app.listen(config.get('port'), () => {
  debug(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
})


module.exports = app;
module.exports.port = listen.address().port;
