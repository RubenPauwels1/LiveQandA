var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');


gulp.task('default', function () {
    console.log("Gulp running...");
});

gulp.task('minify-css', function() {
  return gulp.src('assets/css/*.scss')
  	.pipe(sass().on('error', sass.logError))
    .pipe(concatCss("css/build.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
    gulp.watch('./assets/css/*.scss', ['minify-css']);
})