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