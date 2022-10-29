const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const { authenticatedAdmin } = require('../../middleware/auth')

router.get('/movies', authenticatedAdmin, adminController.getMovies)
router.get('/', (req, res) => res.redirect('/admin/movies'))

module.exports = router
