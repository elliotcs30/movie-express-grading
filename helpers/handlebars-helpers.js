const dayjs = require('dayjs') // 載入 dayjs 套件
const moment = require('moment')

module.exports = {
  currentYear: () => dayjs().year(), // 取得當年年份作為 currentYear 的屬性值，並導出

  // {{momentDate movie.releaseDate}}  ex.2022/10/17
  momentDate: function (date) {
    moment.locale('zh-tw')
    return moment(date).calendar()
  },

  ifCond: function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this)
  }
}
