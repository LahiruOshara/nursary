const mongoose=require('mongoose');
const config=require('../config/database')

const attendanceSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    attendance:{
        type:Boolean,
        require:true

    }

});
const attendanceSheet= module.exports =mongoose.model("attendanceSheet",attendanceSchema);

module.exports.recordApplication= function(application,callback){
    //console.log("saving the application");
    application.save(callback);
    console.log("saved the application");
}

module.exports.getApplication=function(callback){
    attendanceSheet.find(callback);
    console.log('get application');
}