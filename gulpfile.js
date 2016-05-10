var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function() {
  var server = new liveServer('./server.js');
  server.start();
});

gulp.task('serve', ['bundle', 'live-server'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:8080',
    port: 9090
  })
});

gulp.task('bundle', ['copy'], function() {
  return browserify({
    entries: 'Client/main.jsx',
    debug: true,
    extensions: ['.jsx']
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));
});

gulp.task('copy', function() {
  gulp.src(['Client/*.css', 'Client/favicon.ico'])
  .pipe(gulp.dest('./.tmp'));
});
