const http = require('http')
const express = require('express')
const PORT = 3000
const app = express() 
const bodyParser = require('body-parser')
const homeController = require('./routes/home')
const gardenController = require('./routes/garden')

// * define first path
app.use('/home',homeController)
app.use('/garden',gardenController)

// * create server
const server = http.createServer(app)
server.listen(PORT)