let gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean-css');



gulp.task('sass', () => {
  gulp.src('src/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(clean())
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/scss/styles.scss', ['sass']);
});

gulp.task('default', ['watch']);