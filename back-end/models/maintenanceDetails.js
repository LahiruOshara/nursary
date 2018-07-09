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
const maintenanceForm=module.exports = mongoose.model('maintenanceForm',maintenanceFormSchema);

module.exports.recordApplication= function(application,callback){
    //console.log("saving the application");
    application.save(callback);
    //console.log("saved the application");
}


module.exports.getApplications=function(callback){
    maintenanceForm.find(callback);
    console.log("fine")
  }
