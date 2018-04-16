const express=require('express');
const router= express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

const User=require('../models/user');
const config=require('../config/database');

//Register
router.post('/register',(req,res,next)=>{
  let newUser= new User({
    firstName:req.body.firstName,
    middleName:req.body.middleName,
    lastName:req.body.lastName,
    accountType:req.body.accountType,
    address:req.body.address,
    mobileNo:req.body.mobileNo,
    email:req.body.email,
    username:req.body.username,
    password:req.body.password,
  }); 

  User.addUser(newUser,function(error,user){
    if(error){
      res.json({success:false,msg:'Failed to register user'});
    }
    else{        
      res.json({success:true,msg:'User registered'});
    }
  })
});

//Authenticate
router.post('/authenticate',(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    
    User.getUserByUsername(username,function(error,user){
      if(error) throw error;
      if(!user){
        return res.json({success:false, msg:'user not found'})
      }

      User.comparePassword(password,user.password,function(error,isMatch){
        if(error) throw error;
        if(isMatch){
          const token=jwt.sign(user.toJSON(),config.secret,{
            expiresIn:3600
      });

      res.json({
        success:true,
        token:token,
        user:{
          id:user._id,
          accountType:user.accountType,
          username:user.username,
          email:user.email 
        }
      });
      }else{
        return res.json({success:false, msg: "wrong password"});
      }
    });
  });
});

//Routes
router.get('/profile',passport.authenticate('jwt',{session:false}),function(req,res,next){
  //console.log("Here usersjs");  
  res.json({user:req.user});
})

router.get('/teacher',passport.authenticate('jwt',{session:false}),function(req,res,next){  
  res.send();
})

module.exports=router;
