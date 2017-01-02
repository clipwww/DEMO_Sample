var gulp = require('gulp');
var gulpImagemin = require('gulp-imagemin');

//壓縮圖片
gulp.task('image', function() {
    gulp.src('src/images/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('./src/images/'));
});

gulp.task('default', ['image']);