var express = require('express')
var router = express.Router()
var User = require('../db/User')

router.get('', (req, res) => {
  User.getAll()
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
})

router.get('/:user_id', (req, res) => {
  User.findOne(req.params.user_id)
    .then((data) => res.send(data[0]))
    .catch((err) => res.send(err))
})

router.get('/email/:user_email', (req, res) => {
  User.findOneByEmail(req.params.user_email)
    .then((data) => res.send(data[0]))
    .catch((err) => res.send(err))
})

module.exports = router
