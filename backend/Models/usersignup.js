var mongoose = require('mongoose');

var usersignup = mongoose.Schema(
// uname,uid,mail,psw
  {
       name:String , 
       empid:Number,
        mail:String,
         pwd:String
  }
  
);
var usersignup= mongoose.model('usersignup',usersignup);
module.exports = usersignup;
