var express = require('express')
var bodyParser = require('body-parser')

var bc = require('./controllers/books_controller')


var app = express()


app.use(bodyParser.json())

// Endpoints
app.get('/api/books', bc.read())
app.post('/api/books', bc.create)

var port = 4000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})