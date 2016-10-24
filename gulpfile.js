/**
* Basic build system
*
* - using ES6 for JavaScript
* - using SCSS for CSS
*
* @author Wahid Rahim <wahidrahim@gmail.com>
**/

'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')
var browserSync = require('browser-sync').create()

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream())

})

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css/'))
  .pipe(browserSync.stream())
})

gulp.task('es6', function() {
  return gulp.src('app/es6/**/*.es6')
  .pipe(babel())
  .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.stream())
})

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
})

gulp.task('watch', ['serve', 'html', 'sass', 'es6'], function() {
  gulp.watch('app/*.html', ['html'])
  gulp.watch('app/scss/**/*.scss', ['sass'])
  gulp.watch('app/es6/**/*.es6', ['es6'])
})

gulp.task('default', ['watch'])
