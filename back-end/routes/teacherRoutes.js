const express=require('express');
const router= express.Router();

const leaveApplication=require('../models/leaveApplication');
const advPaymentForm=require('../models/advancedPaymentForm');
const holidayDec=require('../models/declareHoliday');
const homework = require('../models/homeWork');
// saving the leave applicationRegister
router.post('/leaveApplication',(req,res)=>{
    let application=new leaveApplication({
        username:req.body.username,
        sdate:req.body.sdate,
        edate:req.body.edate,
        reason:req.body.reason
    });

    leaveApplication.recordApplication(application,(error)=>{
        if (error){
            console.log('Error'+error);
            res.json({success:false,msg:'Faild to record'});
        }else{
            console.log('success');
            res.json({success:true,msg:'Application Sent'});
        }
    });
});

// sending the leave application
router.get('/approveLeave',function(req,res){  
    leaveApplication.getApplications({},(error,applications)=>{
        if(error) throw error;
        res.json({applications});
    });
    //res.json({applications:applications});
});

// saving the advanced payment application
router.post('/advPayment',(req,res)=>{
    let application=new advPaymentForm({
        username:req.body.username,
        amount:req.body.amount,
        reason:req.body.reason
    });

    advPaymentForm.recordApplication(application,(error)=>{
        if (error){
            console.log('Error'+error);
            res.json({success:false,msg:'Faild to process the request'});
        }else{
            console.log('success');
            res.json({success:true,msg:'Request Sent'});
        }
    });
});

//recoding holiday
router.post('/holiday',(req,res)=>{
    let holiday=new holidayDec({
        date:req.body.date,
        reason:req.body.reason
    });

    holidayDec.record(holiday,(error)=>{
        if (error){
            console.log('Error'+error);
            res.json({success:false,msg:'Faild to record'});
        }else{
            console.log('success');
            res.json({success:true,msg:'Success'});
        }
    });
});

router.get('/holidayDec',function(req,res){  
    holidayDec.getHolidays({},(error,holiday)=>{
        if(error) throw error;
        res.json({holiday});
    });
    //res.json({applications:applications});
});


router.post('/addhomework',function(req,res){
    let application = new homework({
        teacherName : req.body.teacherName,
        homework : req.body.homework,
        dueDate : req.body.dueDate
    })
    homework.recordApplication(application,(error,applications)=>{
        if(error) throw error;
        res.json({success:true, msg : "Added homework"});
    });
})

module.exports=router;
