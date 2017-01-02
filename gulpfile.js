var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var gulpImagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

//壓縮圖片
gulp.task('image', function() {
    gulp.src('src/images/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('./src/images/'));
});

//合併壓縮css
gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('default', ['image', 'minify-css']);