

/*
// gulp primer za copyright
// required plugins
var gulp = require('gulp');
// namp install --save-dev gulp-header

var fs = require('fs');
var concat = require('gulp-concat');
var header = require('gulp-header');


// functions
var getCopyright = function(){
    return fs.readFileSync('copyright.txt');
    // sadrzaj koji ce biti ubacen
}

gulp.task('ubaci-header', function(){
    gulp.src('./scr/js/*.js')  // path 
    .pipe(concat('concat-copyright.js')) // ime fajla 
    .pipe(header(getCopyright()))
    .pipe(gulp.dest('./dist/js/'));
});

*/


//njegova vertzija
var gulp = require('gulp');
var fs = require('fs');
var concat = require('gulp-concat');
var header = require('gulp-header');
 
// functions
var getCopyright = function() {
    return fs.readFileSync('copyright.txt'); // fajl ciji sadrzaj ce biti ubacen u vrh novog fajla
}
 
// task
gulp.task('ubaci-header', function() {
   
    gulp.src('./src/js/*.js')   // path do fajlova
    .pipe(concat('concat-copyright.js')) // ime fajla koji ce biti kreiran
    .pipe(header(getCopyright()))
    .pipe(gulp.dest('./dist/js/')) // path do mesta gde ce novi fajl biti sacuvan
    ;

});
