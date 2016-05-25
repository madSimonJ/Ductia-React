var stylus = require('stylus')
var morgan = require('morgan')
var bodyParser = require('body-parser')
// var passport = require('passport')
// var cookieParser = require('cookie-parser')

module.exports = function (app, config) {
  function compile (str, path) {
    return stylus(str).set('filename', path)
  }
  app.use(stylus.middleware({
    src: config.rootPath + '/Client',
    compile: compile
  }))
  app.use(morgan('dev'))
  // app.use(cookieParser());
  // app.use(session({secret: 'multi vision unicorns', resave: true, saveUninitialized: true}));
  // app.use(passport.initialize());
  // app.use(passport.session());
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
}
