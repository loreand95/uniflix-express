const express = require('express')
const userController = require('../controller/user')
const userRequest = require('../middleware/request/user')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/signup', userRequest.signup, userController.signup)
router.post('/signin', userRequest.login, userController.login)
router.get('/me', auth, userController.getAccount)
router.get('/me/id', auth, userController.getUserId)
router.get('/me/library', auth, userController.getLibrary)
//router.post('/emailavailability', userRequest.emailAvailability, userController.emailAvailability)
router.post('/available', userRequest.emailAvailability, userController.emailAvailability)

module.exports = router
