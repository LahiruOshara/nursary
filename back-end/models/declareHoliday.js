const mongoose=require('mongoose');
const config=require('../config/database')

const holidaySchema= mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
})

const holidayPrm=module.exports = mongoose.model('holiday',holidaySchema);
//recod
module.exports.record= function(holidayDec,callback){
    holidayDec.save(callback);
}

// get 
module.exports.getHolidays=function(holiday,callback){
    holidayPrm.find(holiday,callback);
}
