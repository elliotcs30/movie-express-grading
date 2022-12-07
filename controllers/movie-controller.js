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
  }
}

module.exports = movieController
