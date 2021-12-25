const express=require('express');
const router=new express.Router();

router.use(require('./user'));

router.use('*',(req,res)=>{
    res.send("Error :404","page not found")
})

module.exports=router;
