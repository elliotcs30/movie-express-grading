const { Movie, Category } = require('../models')

const movieController = {
  getMovies: (req, res) => {
    return Movie.findAll({
      include: Category,
      nest: true,
      raw: true
    }).then(movies => {
      const data = movies.map(r => ({
        ...r,
        description: r.description.substring(0, 50)
      }))
      return res.render('movies', {
        movies: data
      })
    })
  },
  getMovie: (req, res, next) => {
    return Movie.findByPk(req.params.id, {
      include: Category, // 拿出關聯的 Category model
      nest: true,
      raw: true
    }).then(movie => {
      if (!movie) throw new Error("Movie didn't exist!")
      res.render('movie', { movie })
    }).catch(err => next(err))
  }
}

module.exports = movieController
