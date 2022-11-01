const express = require('express')
const router = express.Router()
const passport = require('../config/passport') // 引入 Passport 做驗證

// 新增，載入 controller
const admin = require('./modules/admin')
const movieController = require('../controllers/movie-controller')
const userController = require('../controllers/user-controller')
const { authenticated, authenticatedAdmin } = require('../middleware/auth')
const { generalErrorHandler } = require('../middleware/error-handler')

router.use('/admin', authenticatedAdmin, admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
router.get('/logout', userController.logout)
router.get('/movies', authenticated, movieController.getMovies)

router.use('/', (req, res) => res.redirect('/movies'))
router.use('/', generalErrorHandler)

module.exports = router
