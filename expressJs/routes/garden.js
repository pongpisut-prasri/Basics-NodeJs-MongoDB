const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    // res.status(200).json([
    //     {
    //         name:"มะพร้าว"
    //     },
    //     {
    //         name:'มะม่วง'
    //     }
    // ])
    res.send('<h1>Welcome to garden</h1>')
})

module.exports = router