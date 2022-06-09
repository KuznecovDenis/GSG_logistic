const isProd = process.argv.includes('--production')
const isDev = !isProd

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  pug: {
    pretty: isDev // отвечает за сжатие 
    // data: {
    //   news: require('../data/news.json')
    // } пример добавления json данных - не забудьте вставить их в нужный pug file
  },

  webpack: {
    mode: isProd ? 'production' : 'development'
  },

  imagemin: {
    verbose: true,
  }
}