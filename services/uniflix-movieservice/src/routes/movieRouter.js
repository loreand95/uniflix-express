const express = require('express')
const router = new express.Router()
const movieController = require('../controller/movieController')

router.get('', movieController.getMovieList)
router.get('/:movieId', movieController.getMovie)

module.exports = router
