const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')


// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const newer = require('gulp-newer')
const ttf2woff2 = require('gulp-ttf2woff2')
const ttf2woff = require('gulp-ttf2woff')



// Обработка fonts
const font = () => {
  return src(path.font.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'ERROR IN FONT',
        message: error.message
      }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(src(path.font.src))
    .pipe(ttf2woff())
    .pipe(dest(path.font.dest))
}

module.exports = font