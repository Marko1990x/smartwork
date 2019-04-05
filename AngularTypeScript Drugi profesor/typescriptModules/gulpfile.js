const gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', () => {
    const tsProject = ts.createProject('./tsconfig.json');

    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())

    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(tsProject.options.outDir));
});
