var express = require('express')
var router = express.Router()
var Vehicle = require('../db/Vehicle')

/***********  GETS  **************/

router.get('/:user_id', (req, res) => {
  Vehicle.findOne(req.params.user_id)
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
})

/***********  POSTS  **************/

router.post('/create', (req, res) => {
  Vehicle.create(req.body.vehicle)
    .then((data) => res.send(data[0]))
    .catch((err) => res.send(err))
})

module.exports = router
