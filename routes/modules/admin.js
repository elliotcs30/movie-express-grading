const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

router.get('/movies', adminController.getMovies)
router.use('/', (req, res) => res.redirect('/admin/movies'))

module.exports = router
