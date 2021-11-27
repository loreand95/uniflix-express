const express = require('express')
const router = new express.Router()
const genreController = require('../controller/genreController')

router.get('', genreController.getGenreList)
router.get('/:genreId', genreController.getGenre)
router.get('/:genreId/movies', genreController.getGenreMovies)

module.exports = router
