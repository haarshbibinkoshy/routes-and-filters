const express=require('express')

const router=express.Router()

router.get(`/add-product`,(req, res, next) => {
   
    res.send( `<form action="/admin/add-product" method="POST"><input type="text" name="title" placeHolder="product"><input type="number" name="size" placeHolder="size"><button type="submit" value="">add product</button></form>`)
})

router.post(`/add-product`,(req, res, next) => {
    console.log(req.body);
    res.redirect(`/shop`)
})

module.exports=router