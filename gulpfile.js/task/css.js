const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')


// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const concat = require('gulp-concat')
const cssimport = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const size = require('gulp-size')
const shorthand = require('gulp-shorthand')
const groupCssMediaQueries = require('gulp-group-css-media-queries')
const webpCss = require('gulp-webp-css')
const gulpIf = require('gulp-if')



// Обработка CSS
const css = () => {
  return src(path.css.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'ERROR IN CSS',
        message: error.message
      }))
    }))
    .pipe(concat('style.css'))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({title: 'style.css до сжатия'}))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulpIf(app.isProd, csso()))
    .pipe(size({title: 'style.min.css сжатый'}))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
}

module.exports = css