var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

var home_routes = require('./routes/home_routes')
var user_routes = require('./routes/user_routes')
var driver_licence_routes = require('./routes/driver_licence_routes')
var vehicle_user_routes = require('./routes/vehicle_user_routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', home_routes)
app.use('/user', user_routes)
app.use('/driver_licence', driver_licence_routes)
app.use('/vehicle_user', vehicle_user_routes)

app.listen(port, function() {
    console.log('Our app is running on port:' + port + '\n')
})
