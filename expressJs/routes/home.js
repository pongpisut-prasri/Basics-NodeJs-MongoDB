const express = require('express')
const router = express.Router()


router.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to my home</h1>')
})

router.get('/action',(req,res,next)=>{
    res.send(
        '<form action="/home/bedroom" method="POST"> <input type="text" name"action"><button type="submit"></button></input></form>'
    )
})

router.post("/bedroom",(req,res,next)=>{
    res.send(req.body)
})
module.exports = router;