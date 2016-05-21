var express = require('express')
var router = express.Router()
var User = require('../db/User')

router.get('', (req, res) => {
  User.getAll()
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
})

module.exports = router
