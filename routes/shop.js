const express=require('express')

const router=express.Router()

router.get(`/`,(req, res, next) => {
    
    res.send(`<h1>hellow from home</h>`)
})

module.exports=router