const mongoose=require('mongoose');
const config=require('../config/database')

const attendanceSchema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    attendance:{
        type:Boolean,
        required:true
    },
})

const attendance=module.exports = mongoose.model('attendanceSchema',attendanceSchema);

module.exports.recordApplication= function(application,callback){
    application.save(callback);
}

module.exports.getAttendance=function(username,callback){
    attendance.find({username:username},callback);
  }