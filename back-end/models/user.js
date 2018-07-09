const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

//user schema
const UserSchema= mongoose.Schema(
  {
    firstName:{
      type:String,
      required:true
    },
    middleName:{
      type:String,
      required:false
    },
    lastName:{
      type:String,
      required:true
    },
    accountType:{
      type:String,
      required:true
    },
    mobileNo:{
      type: String,
      required: true
    },
    email:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },
    username:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    studentName:{
      type:String,
      required:false
    },
    teacherName:{
      type:String,
      required:false
    }

  }
);

const User=module.exports = mongoose.model('User',UserSchema);

module.exports.getUserByID=function(id,callback){
  User.findById(id,callback);
}

module.exports.getUserByUsername=function(username,callback){
  const query ={username:username};
  //db.collection.findOne(query, projection)
  User.findOne(query,callback);
}

module.exports.addUser=function(newUser,callback){
  bcrypt.genSalt(10,function(error,salt){
    bcrypt.hash(newUser.password,salt,function(error,hash){
        console.log(newUser,salt,error);
        if(error) throw error;
        newUser.password=hash;
        newUser.save(callback);
    });
  });
}

module.exports.comparePassword=function(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword,hash,function(error,isMatch){
    if(error) throw error;
    callback(null,isMatch);
  });
}

module.exports.getUserCollecion=function(userType,callback){
  User.find({accountType:userType},callback);
}
module.exports.getusersByStudentName=function(releventUser,callback){
  User.find(releventUser,callback);
  console.log('success')
}
