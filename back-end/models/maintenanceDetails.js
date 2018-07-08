const mongoose=require('mongoose');
const config=require('../config/database');

const maintenanceFormSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        briefDescription:{
            type:String,
            required:true

        } 
    }
);
const maintenanceForm=module.exports = mongoose.model('maintenanceForm',salarySheetSchema);

module.exports.recordApplication= function(application,callback){
    //console.log("saving the application");
    application.save(callback);
    //console.log("saved the application");
}


module.exports.getApplications=function(application,callback){
    application.find(application,callback);
    console.log("fine")
  }
