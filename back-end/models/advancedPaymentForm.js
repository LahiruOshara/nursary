const mongoose=require('mongoose');
const config=require('../config/database')

const advPaymentSchema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    }
})

const advPayment=module.exports = mongoose.model('advancedPayment',advPaymentSchema);

module.exports.recordApplication= function(application,callback){
    application.save(callback);
}