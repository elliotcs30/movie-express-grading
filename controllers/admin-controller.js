const adminController = {
  getMovies: (req, res) => {
    return res.render('admin/movies')
  }
}

module.exports = adminController
