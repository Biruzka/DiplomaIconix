var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var usecases = require('./routes/usecases');
var projects = require('./routes/projects');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/usecases', usecases);
app.use('/projects', projects);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// CORS
app.use(function (req, res, next) {
  var origins = [
    'http://example.com',
    'http://www.example.com',
    'http://localhost:5000',
    'http://localhost:5000/usecases',
    'http://localhost:5000/*',
    '//localhost:4000',
    '//localhost:4000/usecases'
  ];

  for(var i = 0; i < origins.length; i++){
    var origin = origins[i];

    if(req.headers.origin.indexOf(origin) > -1){
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
  }
  res.header("Access-Control-Allow-Methods", '*');
  res.header("Access-Control-Allow-Headers", '*');
  res.header("Access-Control-Allow-Origin", '*');
  next();
});

module.exports = app;


//////here

// load mongoose package
var mongoose = require('mongoose');
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
// /iconix-api
mongoose.connect('mongodb://localhost/iconix-api')
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));



// Конфигурация Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
