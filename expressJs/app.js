const express = require('express')

const http = require('http')
const mongoDb = require('mongoose')
require('dotenv').config()

const homeRoute = require('./routes/home')
const { mongoConnection } = require('./utils/database_connector')

const app = express() 
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/homeSpace",homeRoute)



// * create server
mongoConnection(()=>{
    app.listen(3000)
})