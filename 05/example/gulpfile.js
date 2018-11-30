var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver'),
  dest = 'builds/';

gulp.task('html', function() {
  gulp.src(dest + '*.html');
});

gulp.task('js', function() {
  gulp.src(dest + '**/*.js');
});

gulp.task('css', function() {
  gulp.src(dest + '**/*.css');
});

gulp.task('watch', function() {
  gulp.watch(dest + '**/*.css', ['css']);
  gulp.watch(dest + '**/*.html', ['html']);
  gulp.watch(dest + '**/*.js', ['js']);
});

gulp.task('webserver', function() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['html','js','css','webserver','watch']);
