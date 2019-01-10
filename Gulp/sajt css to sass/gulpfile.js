var gulp = require('gulp');
var imagemin = require('gulp-imagemin');



gulp.task('images-2', function(){
    return gulp.src('./images/*.+(png|jpg|gif|svg)')    // mora se pozivati lokacija images ili direktna lokacija ili /* za sve slike
    .pipe(imagemin(
        [
            imagemin.jpegtran({progressive: true}),
            imagemin.gifsicle({interlaced: true})   // povecano je nivo kompresije 
        ]
    ))    // sa [] se ubacuju opcije u funkciju iz dokumentacije
    .pipe(gulp.dest('dest/images/'));
});


var sass = require('gulp-sass');
// bio je pogresan folder
gulp.task('sass', function(){

        return gulp.src('./scss/*')
        .pipe(sass())
        .pipe(gulp.dest('./dest/css/'));
});

minimizirajJs = require('gulp-uglify');

gulp.task('kompresujJs', function(){
    // npm install --save-dev gulp-uglify
    gulp.src('./js/*.js')
    .pipe(minimizirajJs())
    .pipe(gulp.dest('./dist/js/'));
});



// copyright gulp

var fs = require('fs');
var concat = require('gulp-concat');
var header = require('gulp-header');


// functions
var getCopyright = function(){
    return fs.readFileSync('copyright.txt');
    // sadrzaj koji ce biti ubacen
}

gulp.task('ubaci-header', function(){
    gulp.src('./contract.html')  // path 
    .pipe(concat('concat-copyright.html')) // ime fajla 
    .pipe(header(getCopyright()))
    .pipe(gulp.dest('./dist/htmlconcat/'));
});