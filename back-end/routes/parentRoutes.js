const express=require('express');
const router= express.Router();
const config=require('../config/database');
const transportRequest = require('../models/transportReq')
const parentProfiles=require('../models/user');
const Homework =require('../models/homeWork');

router.post('/transportReq',function(req,res,next){  
    const acType='Parent';
    console.log(req);
    let transportR=new transportRequest({
        username:req.body.username,
        from:req.body.from
    });
    
    transportRequest.recordApplication(transportR,(error,application)=>{
        if (error){
            console.log('Error'+error);
            res.json({success:false,msg:'Faild to record'});
        }else{
            console.log('success');
            res.json({success:true,msg:'Application Sent'});
        }
    });
    
});

router.post('/viweTeacher',function(req,res,next){
    console.log("viwe teacher");
    parentProfiles.getUser(req.body.username,(err,teacher)=>{
        if(err){
            console.log("error getting teacher detail");
            res.json({success:false,msg:"error getting teacher details"});
        }else{
            console.log("Success getting teacher");
            res.json(teacher)
        }
    });
});


router.post('/checkHomework',function(req,res,next){
    Homework.checkHomework(req.body.teachername,(err,homework)=>{
        if(err){
            console.log("Error getting homework");
            res.json({success:false,msg:"Error getting homework"});
        }else{
            console.log("Homework success");
            res.json(homework);
        }
    });
});

router.post('/getUsers',function(req,res,next){
    console.log(req.body.username);
    parentProfiles.getUsers(req.body.username,(err,user)=>{
        if(err){
            console.log("Error");
        }else{
            console.log(user[0]);
            res.json(user[0]);
        }
    })
})



module.exports=router;