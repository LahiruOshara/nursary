const mongoose=require('mongoose');
const config=require('../config/database')

const transportReq= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    }
})

const transportRequest =module.exports = mongoose.model('transportRequest',transportReq);

module.exports.recordApplication= function(transportReq,callback){
    console.log(transportReq);
    transportReq.save(callback);
}

