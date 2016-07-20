
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');

gulp.task('sass', function() {

  return gulp.src('public/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css/'));

});

gulp.task('autoprefix-css', function() {

  return gulp.src('public/css/style.css')
    .pipe(prefix('last 2 version'));

});

gulp.task('compress-js', function () {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/dist'))
});

gulp.task('watch', function() {

  gulp.watch('public/js/*.js', ['compress-js']);
  gulp.watch('public/sass/*.sass', ['sass']);
  gulp.watch('public/css/*.css', ['autoprefix-css']);
  gulp.watch('public/sass/main.sass', ['default']);

});

// first task: 'login-ts',
gulp.task('default', ['compress-js', 'sass', 'autoprefix-css', 'watch']);
