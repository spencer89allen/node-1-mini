var express = require('express')
var bodyParser = require('body-parser')

var bc = require('./controllers/books_controller')


var app = express()


app.use(bodyParser.json())

// Endpoints
app.get('/api/books', bc.read())
app.post('/api/books', bc.create())
app.put(`/api/books:id`, bc.update())
// why is it a collen and not ${} or something?
app.delete(`/api/books:id`, bc.delete())

var port = 4000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})