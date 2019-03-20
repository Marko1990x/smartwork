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
    gulp.src('./scripts/index.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(gulp.dest('./production/js'), done())
})

gulp.task('default', gulp.series('compile-ts', 'scripts'));

gulp.task('watch', function () {
    return gulp.watch('./src/index.ts', gulp.series('default'))
})
