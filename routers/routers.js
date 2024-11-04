const express = require('express')
const router = express.Router()
 
const blogControllers = require('../controllers/postController.js')


router.get('/', blogControllers.index)

module.exports = router