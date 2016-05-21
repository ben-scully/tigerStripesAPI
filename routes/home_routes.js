var express = require('express')
var router = express.Router()
var User = require('../db/User')

router.get('/', (req, res) => {
  res.send('home screen by vickully')
})

module.exports = router
