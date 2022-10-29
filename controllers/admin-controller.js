const { Movie } = require('../models')

const adminController = {
  getMovies: (req, res, next) => {
    Movie.findAll({
      raw: true
    }).then(movies => res.render('admin/movies', { movies }))
      .catch(err => next(err))
    return res.render('admin/movies')
  }
}

module.exports = adminController
