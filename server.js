var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

var user_routes = require('./routes/user_routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', user_routes)

app.listen(port, function() {
    console.log('Our app is running on port:' + port + '\n')
})
