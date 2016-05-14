var gulp = require('gulp')
var LiveServer = require('gulp-live-server')
var browserSync = require('browser-sync')
var browserify = require('browserify')
var reactify = require('reactify')
var source = require('vinyl-source-stream')
var babelify = require('babelify')
var plug = require('gulp-load-plugins')({ lazy: true })
var babel = require('babel-core/register')

gulp.task('live-server', function () {
  var server = new LiveServer('./server.js')
  server.start()
})

gulp.task('serve', ['bundle', 'live-server'], function () {
  browserSync.init(null, {
    proxy: 'http://localhost:8080',
    port: 9090
  })
})

gulp.task('bundle', ['copy'], function () {
  return browserify({
    entries: 'Client/main.jsx',
    debug: true,
    extensions: ['.jsx']
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp/js'))
})

gulp.task('copy', function () {
  gulp.src(['Client/css/*.css', './node_modules/bootstrap/dist/css/bootstrap.min*'])
  .pipe(gulp.dest('./.tmp/css'))
  gulp.src(['Client/favicon.ico', 'Client/robots.txt', 'Client/humans.txt', 'Client/Announce/'])
  .pipe(gulp.dest('./.tmp'))
})

gulp.task('babelify', function () {
  return browserify({
    extensions: ['.jsx', '.js'],
    entries: './Client/main.jsx'
  })
    .transform(babelify.configure({ ignore: /(node_modules)/ }))
    .bundle()
    .on('error', function (err) { console.log(`Error : ${err.message}`) })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./output/'))
})

gulp.task('test', function () {
  return gulp.src('./tests/**/*.js', { read: false })
    .pipe(plug.mocha({
      compilers: {
        'js': babel
      }
    }))
})

gulp.task('build', ['babelify', 'test'], function () {
  return gulp.src('./Client/index.html')
        .pipe(plug.open(), {app: 'google-chrome'})
})
