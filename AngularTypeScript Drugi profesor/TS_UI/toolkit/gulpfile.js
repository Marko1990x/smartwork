var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

// Configs
var appConfig = {};
appConfig.nodemon = require('./configs/nodemon.json');

gulp.task('typescript', function() {
    var tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('../client/scripts'));
});

gulp.task('typescript:watch', ['typescript'], function() {
    gulp.watch('../app/typescript/**/*.ts', ['typescript']);
});
 
gulp.task('sass', function () {
  return gulp.src('../app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../client/styles'));
});
 
gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('../app/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['typescript:watch', 'sass:watch'], function() {
    nodemon(appConfig.nodemon);
});