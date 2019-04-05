const gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify');

gulp.task('compile-ts', () => {
    const tsProject = ts.createProject('./tsconfig.json');

    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())

    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('scripts', function (done) {
    gulp.src('./djura/hellow-world.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(gulp.dest('./prod/js'), done())
})

gulp.task('default', gulp.series('compile-ts', 'scripts'));

gulp.task('watch', function () {
    return gulp.watch('./hellow-world.ts', gulp.series('default'))
})
