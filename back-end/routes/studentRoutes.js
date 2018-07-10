const express=require('express');
const router= express.Router();

const studentProfiles=require('../models/user');


router.get('/getStudentDetails',function(req,res,next){  
    const acType='Student';
    studentProfiles.getUserCollecion(acType,(error,data)=>{
        if(error) throw error;
        res.json(data);
    });
});


module.exports=router;