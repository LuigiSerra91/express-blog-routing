const express = require('express')
const router = express.Router()
 
const blogControllers = require('../controllers/postController.js')

router.get('/:slug', blogControllers.show)
router.get('/', blogControllers.index)
router.post('/', blogControllers.store)

module.exports = router