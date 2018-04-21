const express=require('express');
const router= express.Router();

const leaveApplication=require('../models/leaveApplication');
const advPaymentForm=require('../models/advancedPaymentForm');
const config=require('../config/database');

// saving the leave application
router.post('/leaveApplication',(req,res,next)=>{
    let application=new leaveApplication({
        username:req.body.username,
        sdate:req.body.sdate,
        edate:req.body.edate,
        reason:req.body.reason
    });

    leaveApplication.recordApplication(application,(error,application)=>{
        if (error){
            console.log('Error'+error);
            res.json({success:false,msg:'Faild to record'});
        }else{
            console.log('success');
            res.json({success:true,msg:'Application Sent'});
        }
    });
});

// saving the advanced payment application
router.post('/advPayment',(req,res,next)=>{
    let application=new advPaymentForm({
        username:req.body.username,
        amount:req.body.amount
    });

    advPaymentForm.recordApplication(application,(error,application)=>{
        if (error){
            console.log('Error'+error);
            res.json({success:false,msg:'Faild to process the request'});
        }else{
            console.log('success');
            res.json({success:true,msg:'Request Sent'});
        }
    });
});



module.exports=router;
