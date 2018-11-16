var mongoose = require('mongoose');

var userlog = mongoose.Schema(

  {
       name:String ,

      
         pwd:Number
  }
  
);
 module.exports= mongoose.model('userlogin',userlog);

