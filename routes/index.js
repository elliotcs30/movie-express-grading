const express = require('express')
const router = express.Router()

// 新增，載入 controller
const movieController = require('../controllers/movie-controller')
const admin = require('./modules/admin')

router.use('/admin', admin)
router.get('/movies', movieController.getMovies)

router.use('/', (req, res) => res.redirect('/movies'))

module.exports = router
