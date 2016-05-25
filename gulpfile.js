var gulp = require('gulp')
// var LiveServer = require('gulp-live-server')
// var browserSync = require('browser-sync')
var browserify = require('browserify')
// var reactify = require('reactify')
var source = require('vinyl-source-stream')
var babelify = require('babelify')
var plug = require('gulp-load-plugins')({ lazy: true })
var babel = require('babel-core/register')
var istanbul = require('gulp-istanbul')

// gulp.task('live-server', function () {
//   var server = new LiveServer('./server.js')
//   server.start()
// })
//
// gulp.task('serve', ['bundle', 'live-server'], function () {
//   browserSync.init(null, {
//     proxy: 'http://localhost:8080',
//     port: 9090
//   })
// })
//
// gulp.task('bundle', ['copy'], function () {
//   return browserify({
//     entries: 'Client/main.jsx',
//     debug: true,
//     extensions: ['.jsx']
//   })
//   .transform(reactify)
//   .bundle()
//   .pipe(source('app.js'))
//   .pipe(gulp.dest('./.tmp/js'))
// })

gulp.task('copy', function () {
  gulp.src(['Client/css/*.css', './node_modules/bootstrap/dist/css/bootstrap.min*'])
  .pipe(gulp.dest('./output/css'))
  gulp.src(['Client/favicon.ico', 'Client/robots.txt', 'Client/humans.txt', 'Client/Announce/'])
  .pipe(gulp.dest('./output'))
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

gulp.task('code-coverage', function () {
  return gulp.src(['Server/**/*.js', 'client/**/*.js', '!Server/config/testDataSeeder.js'])
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
})

gulp.task('test', ['code-coverage'], function () {
  return gulp.src('./tests/**/*.js', { read: false })
    .pipe(plug.mocha({
      compilers: {
        'js': babel
      }
    })
  )
  .pipe(istanbul.writeReports({
    dir: './coverage',
    reporters: [ 'lcov', 'json', 'text', 'text-summary' ],
    reportOpts: { dir: './coverage' }
  }))
  // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
})

gulp.task('build', ['babelify', 'copy', 'test'], function () {
  return gulp.src('./Client/index.html')
        .pipe(plug.open(), {app: 'google-chrome'})
})
