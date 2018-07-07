const mongoose=require('mongoose');
const config=require('../config/database');

const salarySheetSchema=mongoose.Schema(
    {
        Month:{type:String,
            required:true
        },
        Days:{
            type: String,
            required:true
        },
        leaves:{
            type :String,
            required:false

        },
        Amount:{
            type:String,
            required:true
        },
        Balance:{
            type:String,
            required:true
        }
       

    }
);
const salarySheet=module.exports = mongoose.model('salarySheet',salarySheetSchema);

module.exports.recordApplication= function(application,callback){
    //console.log("saving the application");
    application.save(callback);
    //console.log("saved the application");
}


module.exports.getApplications=function(application,callback){
    application.find(application,callback);
    console.log("fine")
  }
