const mongoose=require('mongoose');
const config=require('../config/database')

const homeWorkSchema= mongoose.Schema({
    work:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }
})

const homeWork=module.exports = mongoose.model('homeWork',homeWorkSchema);

module.exports.recordApplication= function(application,callback){
    application.save(callback);
}