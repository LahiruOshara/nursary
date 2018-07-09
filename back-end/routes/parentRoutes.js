const express=require('express');
const router= express.Router();
const config=require('../config/database');
const transportRequest = require('../models/transportReq')
const parentProfiles=require('../models/user');
const attendance =require('../models/attendance');
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

router.post('/teacherDetail',function(req,res,next){
    parentProfiles.getUserByUsername(req.body.username,'teacher',(err,teacher)=>{
        if(err){
            console.log("error getting teacher detail");
            res.json({success:false,msg:"error getting teacher details"});
        }else{
            console.log("Success");
            res.json(teacher)
        }
    });
});

router.post('/checkAttendance',function(req,res,next){
    attendance.getAttendance(req.body.username,(err,atten)=>{
        if(err){
            console.log("error getting attendance");
            res.json({success:false,msg:"Error getting attendance"});
        }else{
            console.log(atten[0]);
            res.json({'attendance':atten[0].attendance});
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
    })
})


module.exports=router;