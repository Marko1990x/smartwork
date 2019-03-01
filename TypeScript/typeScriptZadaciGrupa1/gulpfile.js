var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('default', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
    .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest(tsProject.options.outDir));
});