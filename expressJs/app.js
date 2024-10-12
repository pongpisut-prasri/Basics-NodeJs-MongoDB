const http = require('http')
const express = require('express')

// * port for connection ex: localhost:3000
const PORT = 3000
const app = express() 

// * middleware => connect applicationto network
// * add middleware function
// * ()=> arrow function

app.use((request,response,next)=>{
    console.log("1st middleware");
    response.send('<h1>Welcome to this learning project</h1>')
    next(); // * go to next middleware ["2nd middleware"]
});

app.use((request,response,next)=>{
        console.log("2nd middleware");
    });

// * create server
const server = http.createServer(app)
server.listen(PORT)