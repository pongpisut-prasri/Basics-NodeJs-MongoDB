const express = require('express')

const http = require('http')
const mongoDb = require('mongoose')
require('dotenv').config()

const homeRoute = require('./routes/home')

const app = express() 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoDb.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log("Database connect Success");
}).catch((e)=>{
    console.log("can not connect database cause by ",e);
    
})

app.use("/homeSpace",homeRoute)



// * create server
const server = http.createServer(app)
server.listen(3000,'0.0.0.0',()=>{
    console.log("server ready");
})