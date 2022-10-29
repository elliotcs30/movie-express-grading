const express = require('express')
const router = express.Router()

// 新增，載入 controller
const admin = require('./modules/admin')
const movieController = require('../controllers/movie-controller')
const userController = require('../controllers/user-controller')

router.use('/admin', admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/movies', movieController.getMovies)

router.use('/', (req, res) => res.redirect('/movies'))

module.exports = router
