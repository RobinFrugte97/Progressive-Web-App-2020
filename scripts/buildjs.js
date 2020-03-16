const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

return gulp.src('./static/*.js')
    .pipe(concat('index.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist'))
