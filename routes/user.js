const express = require ("express");
const User = require("../models/user");
const router = express.Router()


router.post("/",(req,res)=>{
    
    const{username, password} = req.body
    console.log("registration page"+ req.body)

    const newUser = new User({
        username: username,
        password: password
    })
    newUser.save((err, savedUser)=>{
        if(err)return res.json(err)
            res.json(savedUser)

        
    })
})
router.post("/login", function(req,res,next){
    console.log("req.body in routes/user.js"+ req.body)
    next()
})


router.get ("/",function(req,res,next){
console.log("user" +req.user)
    if(req.user){
        res.json({
            user: req.user
        })
    }else{
        res.json({
            user:null
        })
    }
})