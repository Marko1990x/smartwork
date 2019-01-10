/*
var gulp = require('gulp');  // verzija 4 gulpa

gulp.task('hello',function(done){   // ovde stavim done kao promenjivu koju pozivam za kraj funkcije
    console.log('hello world');
    done(); // ovo je kraj funkcije signal 
});


// prebaceno u stariju gulp verziju




//primer 2


/*
var gulp = require('gulp');

gulp.task('hello', function(){
    console.log('hello world');
});
*/

//priemr 3 vise taskova u jednom gulp fajlu 

/*
var gulp = require('gulp');

gulp.task('task-1', function(){
    console.log('ovo je prvi task');
});

gulp.task('default', function(){      //ovo  znaci da ce se ovaj task odma pozivati po inicializaciji gulp ili samo gulp kada se ukuca
    console.log('ovo je drugi task');
});

*/
/*
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
    return gulp.src('src/images/*.+(png|jpg|gif|svg)')    // mora se pozivati lokacija images ili direktna lokacija ili /* za sve slike
    .pipe(imagemin(
        [
            imagemin.jpegtran({progressive: true}),
            imagemin.gifsicle({interlaced: true})   // povecano je nivo kompresije 
        ]
    ))    // sa [] se ubacuju opcije u funkciju iz dokumentacije
    .pipe(gulp.dest('dist/images/'));
});

// .+(ogranicenje fajlova koje cita) :) ^^ 

*/


/*
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var folder = {
    src:'src/',
    build:'dist/'    // primer sa promenjivma kao lokacijama za citanje i cuvanje slika.
};

gulp.task('images-2', function(){
    return gulp.src(folder.src + '/images/*.+(png|jpg|gif|svg)')    // mora se pozivati lokacija images ili direktna lokacija ili /* za sve slike
    .pipe(imagemin(
        [
            imagemin.jpegtran({progressive: true}),
            imagemin.gifsicle({interlaced: true})   // povecano je nivo kompresije 
        ]
    ))    // sa [] se ubacuju opcije u funkciju iz dokumentacije
    .pipe(gulp.dest( folder.build + 'images/'));
});

*/

/*
// npm install --save-dev gulp-minify-css  plugin install code minimiziranje css fajla
var gulp = require('gulp');
var cleanCss = require('gulp-minify-css');

gulp.task('clean-css', function() {
     gulp.src('./src/css/contactUpdate.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/css/'));
});

*/


/*

// primer 6 kompresija javascript fajlova

var gulp = require('gulp'), minimizirajJs = require('gulp-uglify');
// 
gulp.task('kompresujJs', function(){
    // npm install --save-dev gulp-uglify
    gulp.src('./src/js/*.js')
    .pipe(minimizirajJs())
    .pipe(gulp.dest('./dist/js/'));
});



// primer 7 - povezivanje vise fajlova u jedan 

//https://www.npmjs.com/package/gulp-concat
// npm install gulp-concat

var gulp = require('gulp');
var prilepi = require('gulp-concat');


gulp.task('slepiJs', function(){

    return gulp.src('./src/js/*.js')
    .pipe(prilepi('slepljen.js'))   // naziv slepljenog fajla
    .pipe(gulp.dest('./dist/js/'));   // destinacija slepljenog fajla
    // promenjena loakcija cuvanja da ne bi lepio iste stvari vise outa

});

*/

// primer 9. kompakiranje sass fajla
// npm install gulp-sass --save-dev
/*
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){

        return gulp.src('./src/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'));
});

*/

//primer 10
/*
var gulp =require('gulp');

gulp.task('task-1', function(){
    console.log('ovo je prvi task');
});

gulp.task('task-2', function(){
    console.log('ovo je drugi task');
});

gulp.task('nekoliko-taskova', ['task-2', 'task-1']);

*/

//primer 11 -ciscenje i kompresija html fajla
//npm install --save-dev gulp-celanhtml

var gulp = require('gulp');
var cleamhtml = require('gulp-cleanhtml');

gulp.task('cleanhtml', function(){
    gulp.src('./src/html/example.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('./dist/html/'));
});