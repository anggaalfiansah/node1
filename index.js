// let http = require('http')

// http.createServer(function (req,res) {
//     res.writeHead(200, {'Content-Type' : 'text/html'})
//     res.end('<h1>Hello World</h1>')
// }).listen(5000)
const express = require('express')
const app = express()
const route = require('./routes/route')

app.set('view engine', 'ejs')

app.use(express.static(__dirname+'/public'))

app.get('/Home', route.home)
app.get('/Category', route.category)
app.get('/Contact', route.contact)
app.get('/Detail', route.detail)
app.get('/', route.home)

app.listen(5000, function() {
    console.log('Server berjalan')
})