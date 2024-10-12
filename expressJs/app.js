const http = require('http')
const mongoDb = require('mongoose')
const express = require('express')
require('dotenv').config()

const app = express() 
const bodyParser = require('body-parser')
const homeController = require('./routes/home')
const gardenController = require('./routes/garden')

mongoDb.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log("Database connect Success");
}).catch((e)=>{
    console.log("cause by ",e);
    
})

// * define first path
app.use('/home',homeController)
app.use('/garden',gardenController)

// * create server
const server = http.createServer(app)
server.listen(process.env.PORT)