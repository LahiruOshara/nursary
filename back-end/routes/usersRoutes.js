const express=require('express');
const router= express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database');
const salarySheet=require('../models/salarysheet');

const User=require('../models/user');


//Register
router.post('/register',(req,res,next)=>{
  const username=req.body.username;
  User.getUserByUsername(username,(error,newUser)=>{
    if(error) throw error;
    if(newUser){
      return res.json({success:false,msg:'username already exits'});
    }else{
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
      User.addUser(newUser,function(error){
        if(error){
          res.json({success:false,msg:'Failed to register user'});
        }
        else{        
          res.json({success:true,msg:'User registered'});
          }
        })
      }
    })
  });

//Authenticate
router.post('/authenticate',(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    
    User.getUserByUsername(username,(error,user)=>{
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
  //console.log(req.user);  
  res.json({user:req.user});
})

router.get('/teacher',passport.authenticate('jwt',{session:false}),function(req,res,next){  
  res.send();
})

// user
router.post('/relevantUsers',(req,res,next)=>{
  let relevantUser={//create a json type object
    teacherName:req.body.teacherName,
    accountType:req.body.accountType
  }

  User.getusersByStudentName(relevantUser,(error,studentName)=>{//carefull send correctly parent
    if(error) throw error
    res.json({studentName})
  });
});
  //tale relevanrt salary sheet
  router.post('/salarySheet',(req,res,next)=>{
    console.log("back-end");
    console.log(req.body);
   const username=req.body.username;
   console.log(username)
   console.log("here");
   salarySheet.getApplication(username,(error,application)=>{
      if(error) throw error
      res.json(application)

   });
  });

module.exports=router;