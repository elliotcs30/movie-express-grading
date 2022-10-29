const { Movie } = require('../models')

const adminController = {
  getMovies: async (req, res, next) => {
    try {
      Movie.findAll({ raw: true })
        .then(movies => res.render('admin/movies', { movies }))
        .catch(err => next(err))
    } catch (err) {
      next(err)
    }
  },
  createMovie: (req, res, next) => {
    return res.render('admin/create-movie')
  },
  postMovie: (req, res, next) => {
    const { title, genres, description, releaseDate, image } = req.body

    if (!title) throw new Error('Restaurant name is required!') // title 是必填，若發先是空值就會終止程式碼，並在畫面顯示錯誤提示

    Movie.create({ // 產生一個新的 Movie 物件實例，並存入資料庫
      title,
      genres,
      description,
      release_date: releaseDate,
      image
    })
      .then(() => {
        req.flash('success_messages', 'movie was successfully created') // 在畫面顯示成功提示
        res.redirect('/admin/movies') // 新增完成後導回後台首頁
      })
      .catch(err => next(err))
  },
  getMovie: (req, res, next) => {
    Movie.findByPk(req.params.id, { // 去資料庫用id找一筆資料
      raw: true // 找到以後整理格式再回傳
    })
      .then(movie => {
        // 如果找不到，回傳錯誤訊息，後面不執行
        if (!movie) throw new Error("Movie didn't exist!")

        res.render('admin/movie', { movie })
      })
      .catch(err => next(err))
  }
}

module.exports = adminController
