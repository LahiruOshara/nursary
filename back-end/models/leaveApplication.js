const mongoose=require('mongoose');
const config=require('../config/database')

const leaveApplicationSchema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    sdate:{
        type:String,
        required:true
    },
    edate:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
})

const leaveApplication=module.exports = mongoose.model('leaveApplication',leaveApplicationSchema);

module.exports.recordApplication= function(application,callback){
    //console.log("saving the application");
    application.save(callback);
    //console.log("saved the application");
}

/*
module.exports.getApplications=function(application,callback){
    application.find(application,callback);
  }
*/