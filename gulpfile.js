let gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  //compass = require('gulp-compass'),
  clean = require('gulp-clean-css');



gulp.task('sass', () => {
  gulp.src('src/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass())
    //.pipe(compass({
    //  sass: 'src/scss',
    //  css: 'build/css'
    //}))
    .pipe(clean())
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/scss/styles.scss', ['sass']);
});

gulp.task('default', ['watch']);