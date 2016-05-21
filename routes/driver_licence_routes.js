var express = require('express')
var router = express.Router()
var DriverLicence = require('../db/DriverLicence')

router.get('/:user_id', (req, res) => {
  DriverLicence.findOne(req.params.user_id)
    .then((data) => res.send(data[0]))
    .catch((err) => res.send(err))
})

module.exports = router
