const express = require('express')
const router = express.Router()
const NumberController = require('../controllers/number.controller')

router.get('/', NumberController.getNumber)
router.post('/', NumberController.incrementNumber)

module.exports = router