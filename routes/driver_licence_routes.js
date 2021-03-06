var express = require('express')
var router = express.Router()
var DriverLicence = require('../db/DriverLicence')

/***********  GETS  **************/

router.get('/:user_id', (req, res) => {
  DriverLicence.findOne(req.params.user_id)
    .then((data) => res.send(data[0]))
    .catch((err) => res.send(err))
})

/***********  POSTS  **************/

router.post('/create', (req, res) => {
  DriverLicence.create(req.body.create)
    .then((data) => res.send(data[0]))
    .catch((err) => res.send(err))
})

module.exports = router
