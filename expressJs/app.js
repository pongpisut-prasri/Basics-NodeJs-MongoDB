require('dotenv').config()
const express = require('express')
const homeRoute = require('./routes/home')
const { mongoConnection } = require('./utils/database_connector')

const app = express() 

// * json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// * mapping
app.use("/homeSpace",homeRoute)

// * create server
mongoConnection(()=>{
    app.listen(process.env.PORT)
})