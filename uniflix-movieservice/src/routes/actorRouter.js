const express = require('express')
const router = new express.Router()
const actorController = require('../controller/actorController')

router.get('/:actorId', actorController.getActor)

module.exports = router
