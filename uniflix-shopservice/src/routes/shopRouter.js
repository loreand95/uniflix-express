const express = require('express')
const router = new express.Router()
const shopController = require('../controller/shopController')
const {optionalAuth, mandatoryAuth} = require('../middleware/auth')

router.get('/movies', optionalAuth, shopController.getMovieList)
router.get('/movies/:movieId', optionalAuth, shopController.getMovie)
router.post('/movies/:movieId/buy', mandatoryAuth, shopController.buyMovie)


module.exports = router
