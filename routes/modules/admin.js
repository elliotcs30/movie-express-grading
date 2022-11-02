const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const upload = require('../../middleware/multer')

router.get('/movies/create', adminController.createMovie)
router.get('/movies/:id/edit', adminController.editMovie)
router.get('/movies/:id', adminController.getMovie)
router.put('/movies/:id', upload.single('image'), upload.single('import-excel'), adminController.putMovie)
router.delete('/movies/:id', adminController.deleteMovie)

router.get('/movies', adminController.getMovies)
router.post('/movies', upload.single('image'), upload.single('import-excel'), adminController.postMovie)
router.get('/', (req, res) => res.redirect('/admin/movies'))

module.exports = router
