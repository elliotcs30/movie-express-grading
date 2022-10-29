const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

router.get('/movies/create', adminController.createMovie)
router.get('/movies/:id', adminController.getMovie)

router.get('/movies', adminController.getMovies)
router.post('/movies', adminController.postMovie)
router.get('/', (req, res) => res.redirect('/admin/movies'))

module.exports = router
