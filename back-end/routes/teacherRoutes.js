const express=require('express');
const router= express.Router();
const salarySheet=require('../models/salarysheet');
const leaveApplication=require('../models/leaveApplication');
const advPaymentForm=require('../models/advancedPaymentForm');
const maintenanceDetailsForm=require('../models/maintenanceDetails');
const attendanceSheet=require('../models/Attendance');


// saving the leave application
router.post('/leaveApplication',(req,res,next)=>{
    let application=new leaveApplication({
        username:req.body.username,
        sdate:req.body.sdate,
        edate:req.body.edate,
        reason:req.body.reason,
        accept:req.body.accept
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

// sending the leave application
router.get('/approveLeave',function(req,res,next){  
    
    leaveApplication.getApplications((error,applications)=>{
        if(error) throw error;
        res.json(applications);
    });
    //res.json({applications:applications});
});
//remove application
router.post('/deleteApplication',(req,res,next)=>{
    let application={
        username:req.body.username,
        sdate:req.body.sdate,
        edate:req.body.edate,
        reason:req.body.reason,
        accept:req.body.accept
    };

    leaveApplication.deleteApplication(application,(error,application)=>{
        if (error){
            console.log('Error'+error);
            res.json({success:false,msg:'Faild to record'});
        }else{
            console.log('success');
            res.json({success:true,msg:'Application Deleted'});
        }
    });
});

// saving the advanced payment application
router.post('/advPayment',(req,res,next)=>{
    let application=new advPaymentForm({
        username:req.body.username,
        amount:req.body.amount,
        reason:req.body.reason
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

//saving the salary sheet
router.post('/salarySheet',(req,res,next)=>{
    let application=new salarySheet({
        username:req.body.username,
        Month:req.body.Month,
        Days:req.body.Days,
        leaves:req.body.leaves,
        Amount:req.body.Amount,
        Balance:req.body.Balance

    });
    salarySheet.recordApplication(application,(error,application)=>{
        if(error){
            console.log('Error'+error)
            res.json({success:false,msg:"Faild to process the request"});
        }else{
            console.log('success');
            res.json({success:true,msg:"reqest sent"});
        }
    });

});
// getting maintenance details
router.get('/requestMaintenance',function(req,res,next){
    maintenanceDetailsForm.getApplications((error,application)=>{
        if(error){throw error}
        res.json(application)

    });
});
//saving maintenance details
router.post('/requestMaintenance',(req,res,next)=>{
    let application=new  maintenanceDetailsForm({
        username:req.body.username,
        briefDescription:req.body.briefDescription

    }); 
    maintenanceDetailsForm.recordApplication(application,(error,application)=>{
        if(error){
            console.log('Error'+error)
            res.json({success:false,msg:"Faild to process the request"});
        }else{
            console.log('success');
            res.json({success:true,msg:"reqest sent"});
        }

    });
 

});
//get attendance details

router.get('/markAttendance',(req,res,next)=>{
    attendanceSheet.getApplication((error,application)=>{
        if(error){throw error}
        res.json(application);
    });
});
//saving attendance details
router.post('/markAttendance',(req,res,next)=>{
    let application=new attendanceSheet({
        username:req.body.username,
        attendance:req.body.attendance

    });
    attendanceSheet.recordApplication(application,(error,application)=>{
        if(error){
            console.log('Error'+error)
            res.json({success:false,msg:"Faild to process the request"});
        }else{
            console.log('success');
            res.json({success:true,msg:"reqest sent"});
        }
    });
});

module.exports=router;

