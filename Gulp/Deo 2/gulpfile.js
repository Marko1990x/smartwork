// gulpfile.js

/*
Instalacija
	npm install gulp -g
	gulp -v
	npm install --save-dev gulp@3.9.1
	gulp -v

Plugins:
https://gulpjs.com/plugins/

*/

// 1. primer - hello world, gulp v4
/*
var gulp = require('gulp');

gulp.task('hello', function(done) {
   console.log('Hello world');
   done();
});
*/

/*
// 2. primer - hello world, gulp v3
var gulp = require('gulp');

gulp.task('hello', function() {
   console.log('Hello world');
});
*/

// 3. primer - vise taskova u jednom gulp fajlu
// i default-ni task
/*
var gulp = require('gulp');

gulp.task('task-1', function(){
	console.log('Ovo je prvi task');
});

gulp.task('default', function(){
	console.log('Ovo je drugi task');
});
*/
/*
// 4. primer - kompresija slika
// npm install --save-dev gulp-imagemin
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('kompresuj-slike', function(){
	return gulp.src('./src/images/*.+(png|jpg|gif|svg|jpeg)')
	.pipe(imagemin(
		[
			imagemin.jpegtran({progressive: true})
		]
	))
	.pipe(gulp.dest('./dist/images/'));
});
*/


/*
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var folder = {
	src:'src/', 
	build:'dist/'
};

gulp.task('kompresuj-slike-2', function(){
	return gulp.src(folder.src + 'images/*.+(png|jpg|gif|svg)')
	.pipe(imagemin(
		[
			imagemin.jpegtran({progressive: true})
		]
	))
	.pipe(gulp.dest(folder.build + 'images/'));
});
*/


// 5. primer - kompresija css fajla
//npm install --save-dev gulp-minify-css
/*
var gulp = require('gulp');
var cleanCss = require('gulp-minify-css');

gulp.task('clean-css', function(){
	
	gulp.src('./src/css/style.css')
	.pipe(cleanCss())
	.pipe(gulp.dest('./dist/css/'));

	
});
*/
/*
// 6. primer - kompresija javascript fajlova
// npm install --save-dev gulp-uglify
var gulp = require('gulp'), 
var minimizirajJS = require('gulp-uglify');

gulp.task('kompresujJS', function() {
	
	gulp.src('./src/js/*.js')
	.pipe(minimizirajJS())
	.pipe(gulp.dest('./dist/js/'));
	
});
*/

/*
// 7. primer - povezivanje vise fajlova u jedan
// npm install --save-dev gulp-concat
var gulp = require('gulp');
var prilepi = require('gulp-concat');

gulp.task('povezi', function(){
	gulp.src('./src/js/*.js')
	.pipe(prilepi('slepljeni.js'))
	.pipe(gulp.dest('./dist/js/'));
});
*/


// 8. primer - ubacivanje headera (za npr. copyright)
// npm install --save-dev gulp-header
// npm install --save-dev gulp-concat
/*
// including plugins
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
	
	gulp.src('./src/js/*.js')	// path do fajlova
	.pipe(concat('concat-copyright.js')) // ime fajla koji ce biti kreiran
	.pipe(header(getCopyright()))
	.pipe(gulp.dest('./dist/js/')) // path do mesta gde ce novi fajl biti sacuvan
	;
	
	
});
*/


// primer 9. kompajliranje sass fajla
// npm install gulp-sass --save-dev
/*
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	
	return gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/css/'));
	
});
*/

/*
// primer 10 - izvrsavanje nekoliko taskova u sekvenci
var gulp = require('gulp');
gulp.task('task-1', function(){
	console.log('Ovo je prvi task');
});

gulp.task('task-2', function(){
	console.log('Ovo je drugi task');
});

gulp.task('nekoliko-taskova', ['task-2', 'task-1']);
*/


/*
// primer 11 - ciscenje i kompresja html fajla
// npm install --save-dev gulp-cleanhtml

var gulp = require('gulp');
var cleanhtml = require('gulp-cleanhtml');
 
gulp.task('cleanhtml', function(){
  gulp.src('./src/html/*.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('./dist/html/'));
});
*/

/*
// npm install --save-dev gulp-watch
var gulp = require('gulp'),
    watch = require('gulp-watch');
 
gulp.task('stream', function () {
    // Endless stream mode
    return watch('./src/css/** /*.css', { ignoreInitial: false })
        .pipe(gulp.dest('./dist/css/'));
});
*/


// primer 12 - pracenje promene sadrzaja fajla

var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

gulp.task('minify-css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch:css', function () {
    gulp.watch('./src/css/*.css', ['minify-css']);
});







