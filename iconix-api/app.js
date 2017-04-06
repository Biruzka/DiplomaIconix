var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var usecases = require('./routes/usecases');
var projects = require('./routes/projects');
var prototypes = require('./routes/prototypes');
var notes = require('./routes/notes');
var users = require('./routes/users');
var User = require('./models/User')

var index = require('./routes/index');

var app = express();

var passport = require('passport');
var jwt         = require('jwt-simple');
var config      = require('./config/database');
var apiRoutes = express.Router();


apiRoutes.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password || !req.body.login) {
    res.json({success: false, msg: 'Please pass login, email and password.'});
  } else {
    var newUser = new User({
      login: req.body.login,
      email: req.body.email,
      password: req.body.password,
      projects: req.body.projects
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'User email already is used.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token, user: user});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});


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
app.use('/prototypes', prototypes);
app.use('/notes', notes);
app.use('/users', users);

app.use('/api', apiRoutes);

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

// var expressSession = require('express-session');
// app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
require('./config/passport')(passport);
// app.use(passport.session());

