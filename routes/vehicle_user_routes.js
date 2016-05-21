var express = require('express')
var router = express.Router()
var VehicleUser = require('../db/VehicleUser')

router.get('/:user_id', (req, res) => {
  VehicleUser.findOne(req.params.user_id)
    .then((data) => res.send(data[0]))
    .catch((err) => res.send(err))
})

module.exports = router
