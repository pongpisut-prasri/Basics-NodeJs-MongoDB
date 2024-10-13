const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/getAllSpace',userController.getAllSpace)

router.post('/addSpace',userController.addSpace)

router.get('/getSpaceById',userController.getSpaceById)

module.exports = router;