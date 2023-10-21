const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('sass/**/*.sass')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['sass/**/*.sass'],buildStyles)
}

exports.default = series(buildStyles, watchTask);