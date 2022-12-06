const { Movie, User, Category } = require('../models')
const { imgurFileHandler } = require('../helpers/file-helpers')

const adminController = {
  getUsers: (req, res, next) => {
    return User.findAll({ raw: true })
      .then(users => res.render('admin/users', { users }))
      .catch(err => next(err))
  },
  patchUser: (req, res, next) => {
    return User.findByPk(req.params.id)
      .then(user => {
        if (!user) throw new Error("User didn't exist!")

        if (user.email === 'root@example.com') {
          req.flash('error_messages', '禁止變更 root 權限')
          res.redirect('back')
          return
        }

        user.update({ isAdmin: !user.isAdmin })
      })
      .then(() => {
        req.flash('success_messages', '使用者權限變更成功')
        res.redirect('/admin/users')
      })
      .catch(err => next(err))
  },
  getMovies: async (req, res, next) => {
    try {
      Movie.findAll({
        raw: true,
        nest: true,
        include: [Category]
      })
        .then(movies => res.render('admin/movies', { movies }))
        .catch(err => next(err))
    } catch (err) {
      next(err)
    }
  },
  createMovie: (req, res, next) => {
    return Category.findAll({ raw: true })
      .then(categories => res.render('admin/create-restaurant', { categories }))
      .catch(err => next(err))
  },
  postMovie: (req, res, next) => {
    const { title, genres, description, releaseDate, categoryId } = req.body

    if (!title) throw new Error('Title name is required!') // title 是必填，若發先是空值就會終止程式碼，並在畫面顯示錯誤提示

    const { file } = req // 把檔案取出來，也可以寫成 const file = req.file
    return imgurFileHandler(file) // 把取出的檔案傳給 file-helper 處理後
      .then(filePath => {
        Movie.create({
          title,
          genres,
          description,
          releaseDate,
          image: filePath || null,
          categoryId
        })
      })
      .then(() => {
        req.flash('success_messages', 'movie was successfully created') // 在畫面顯示成功提示
        res.redirect('/admin/movies') // 新增完成後導回後台首頁
      })
      .catch(err => next(err))
  },
  getMovie: (req, res, next) => {
    Movie.findByPk(req.params.id, { // 去資料庫用id找一筆資料
      raw: true, // 找到以後整理格式再回傳
      nest: true,
      include: [Category]
    })
      .then(movie => {
        // 如果找不到，回傳錯誤訊息，後面不執行
        if (!movie) throw new Error("Movie didn't exist!")
        res.render('admin/movie', { movie })
      })
      .catch(err => next(err))
  },
  editMovie: (req, res, next) => {
    return Promise.all([
      Movie.findByPk(req.params.id, { raw: true }),
      Category.findAll({ raw: true })
    ])
      .then(([movie, categories]) => {
        if (!movie) throw new Error("Movie didn't exist!")
        res.render('admin/edit-movie', { movie, categories })
      }).catch(err => next(err))
  },
  putMovie: (req, res, next) => {
    const { title, genres, description, releaseDate, categoryId } = req.body

    if (!title) throw new Error('Title name is required!')

    const { file } = req // 把檔案取出來
    return Promise.all([ // 非同步處理
      Movie.findByPk(req.params.id), // 去資料庫查有沒有這部電影
      imgurFileHandler(file) // 把檔案傳到 file-helper 處理
    ]).then(([movie, filePath]) => { // 以上兩樣事都做完以後
      if (!movie) throw new Error('Movie name is required!')
      return movie.update({
        title,
        genres,
        description,
        releaseDate,
        image: filePath || movie.image, // 如果 filePath 是 Truthy (使用者有上傳新照片) 就用 filePath，是 Falsy (使用者沒有上傳新照片) 就沿用原本資料庫內的值
        categoryId
      })
    })
      .then(() => {
        req.flash('success_messages', 'movie was successfully to update')
        res.redirect('/admin/movies')
      })
      .catch(err => next(err))
  },
  deleteMovie: (req, res, next) => {
    return Movie.findByPk(req.params.id)
      .then(movie => {
        if (!movie) throw new Error("Movie didn't exist!")

        return movie.destroy()
      })
      .then(() => res.redirect('/admin/movies'))
      .catch(err => next(err))
  }
}

module.exports = adminController
