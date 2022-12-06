const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const categoryController = require('../../controllers/category-controller')
const upload = require('../../middleware/multer')

router.get('/movies/create', adminController.createMovie)
router.get('/movies/:id/edit', adminController.editMovie)
router.get('/movies/:id', adminController.getMovie)
router.put('/movies/:id', upload.single('image'), adminController.putMovie)
router.delete('/movies/:id', adminController.deleteMovie)

router.get('/movies', adminController.getMovies)
router.post('/movies', upload.single('image'), adminController.postMovie)

router.patch('/users/:id', adminController.patchUser)
router.get('/users', adminController.getUsers)
router.get('/categories/:id', categoryController.getCategories)
router.put('/categories/:id', categoryController.putCategory)
router.get('/categories', categoryController.getCategories)
router.post('/categories', categoryController.postCategory)
router.use('/', (req, res) => res.redirect('/admin/movies'))

module.exports = router
