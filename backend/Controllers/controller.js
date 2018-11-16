
var models_schema = require('../Models/setqst_Schema');

var signup_schema = require('../Models/signup');
var jwt = require('jsonwebtoken');
var login_schema = require('../Models/login');
var login_schema = require('../Models/login');
var userlog_schema = require('../Models/userlogin');
var bcrypt=require('bcrypt');

var userssignup_schema = require('../Models/usersignup');

exports.test = (req,res)=>{
    console.log("get method connected");
    res.send("get method connected");
}

exports.qst = (req,res)=>{

// bodyparser
 var qst = new models_schema({ 

    question_id:req.body.qid,
    Question:req.body.question,
    Option1:req.body.option1,
    Option2:req.body.option2,
    Option3:req.body.option3,
    Option4:req.body.option4,
    KeyAnswer:req.body.keyAnswer 


 

});
// save
 qst.save().then(data=>{
     console.log("success");
 }).catch(err=>{
     console.log("Not inserted");
 })
}

// get question
exports.getquestion = (req, res) => {
    models_schema.find()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.send(err);
    });
}

// delete question
exports.deletequestion = (req, res) => {
    models_schema.findOneAndDelete(req.body.question_id)
    .then(data => {
        res.send("deleted");
        console.log("deleted");
    }).catch(err => {
    
         console.log(err);
         res.send(err);
    });
}

// update question


exports.updatequestion = (req, res) => {
    models_schema.findOneAndUpdate(req.body.question_id,{$set:{question:req.body.question,option1:req.body.option1,option2:req.body.option2,option3:req.body.option3,option4:req.body.option4,keyAnswer:req.body.keyAnswer}},function(err, result){
        if(err){
            res.send(err);
            console.log(err)
        }
        if(result)
        {
            res.send("updated");
            console.log("updated");
        }
    })
   
}

//token


exports.signup = (req, res) => {
    var signup = new signup_schema({
        uname:req.body.uname,
        unamelast:req.body.unamelast,
        mail:req.body.mail,
        psw:req.body.psw
    });

    signup.save().then(data=>{
        console.log("signup");
    }).catch(err=>{
        console.log("Not signup");
    })
}


exports.signupdata = (req, res) => {
    signup_schema.find()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.send(err);
    });
}



exports.login = (req, res) => {
    
    var login = new login_schema({
        user:req.body.user,
        psw:req.body.psw
    });

    login.save().then(data=>{
        console.log("login");
    }).catch(err=>{
        console.log("Not login");
    })
}


exports.logindata = (req, res) => {
    login_schema.find()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.send(err);
    });
}

exports.usersignup=(req,res)=>{
    // var data={
    //                 name:req.body.name,
    //              pwd:req.body.pwd 
    //              }
    //     var token=jwt.sign(data,'req.body.pwd');
    //     console.log("sucess",token)

    // var user=new userssignup_schema();
    //    user.name=req.body.name;
    //    user.empid=req.body.empid,
    //    user.mail=req.body.mail,
    //    user.pwd=token;
    //    user.save((err,result)=>{
    //        if (!err)
    //        {
    //            console.log("sucess")
    //            res.json(result);
    //        }
    //        else {
    //           res.status(422);
    //        }
    //        })
 
        var data={
            name:req.body.name,
            pwd:req.body.pwd 
        }
        var token=jwt.sign(data,'req.body.pwd');
        var user=new userssignup_schema({
        name:req.body.name,
        empid:req.body.empid,
        mail:req.body.mail,
        pwd:token 
        });
        console.log(user);
        
        user.save(function(err,data){
            if(data){
                console.log("token-success");
                res.json(data)
            }
            else{
                console.log("err");
                
                res.json("error")
            }
        })
//         
    
                    }

exports.usersignupdata = (req, res) => {
    userssignup_schema.find()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.send(err);
    });
}

exports.userlog = (req, res) => {
    userssignup_schema.findOne({"name":req.body.name},function(err,data){
      if(data){
          jwt.verify(data.pwd,req.body.pwd,function(err,result){
            if(result){
              res.json("Decoded successfully");
            }
            else{
              console.error(err);
              }
          })
        }
        else{
          console.error(err);
        }
    })
 }

// exports.userlog = (req, res) => {
//     console.log(res)
//          op=userssignup_schema.findOne({"name":req.body.name})
//                 .then(data => {
//                       console.log("data");
//                        // console.log(data.password);
//                         var check = jwt.verify(data.password,userpwdpassword);
//                     if(check==userpwdpassword)
//                      {
//                              console.log("matched")
//                             res.json("success");
//                         }
//                     }).catch(err => {
                        
//                         console.log(err);
//                      res.json(err);
//                     });
//                     console.log(op);
//                  }

    //.exec()-force to execute next line...
              
                     
                    
                    
             
            
            
    // userssignup_schema.findOne({"name":req.body.name},function(err,data){
    //   if(data){
    //       console.log("data")
    //       jwt.verify(data.pwd,req.body.pwd,function(err,result){
    //         if(result){
    //           res.json("Decoded successfully");
    //         }
    //         else{
    //           console.error(err);
    //           }
    //       })
    //     }
    //     else{
    //       console.error(err);
    //     }
    // })
 



exports.userlogdata = (req, res) => {
    userlog_schema.find()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.send(err);
    });
}



// exports.usersignup=(req,res)=>{
//     bcrypt.hash(req.body.pwd,10,(err,hash)=>{
//         if(err) {return res.status(500).json({error:'error'})}else{
//            req.body.pwd=hash;
//         const user=new userssignup_schema({uname:req.body.name,unamelast:req.body.unamelast,mail:req.body.mail,hash})
//         console.log(user);
//         user.save().then((result)=>{
//             res.status(200).json({
//                 success:'new user add'
//             })
//         }).catch(error=>{
//             res.status(500).json({
//                 error:'its not valid'
//             })
//         })
//     }
//     })
// }

// exports.userlog=function(req, res){
//     console.log(req.body);
    
//     userssignup_schema.findOne({uname: req.body.name})
//     .exec()
//     .then(function(userssignup_schema) {
       
        
        
//        bcrypt.compare(req.body.pwd, userssignup_schema.pwd, function(err, result){
//           if(err) {
//              return res.status(401).json({
//                 failed: 'Unauthorized Access'
//              });
//           }
//           if(result) {
//             const token = jwt.sign({id: userdetail._id},'secretkey', { expiresIn: '1h' });
//              return res.status(200).json({
//                 // success: 'Welcome to the JWT Auth'
//                 token:token
//              });
            
//           }
//           return res.status(401).json({
//              failed: 'Unauthorized Access'
//           });
//        });
//     })
//     .catch(error => {
//        res.status(500).json({
//           error: error
//        });
//     });;
// }














// var models_schema = require('../Models/setqst_Schema');
// var singup_schema = require('../Models/singup');
// var jwt = require('jsonwebtoken');

// exports.test = (req,res)=>{
//     console.log("get method connected");
//     res.send("get method connected");
// }
// // singup
// exports.singup = (req,res)=>{
// var username=req.body.username;
// var password = req.body.password;
// var token = jwt.sign(username,password);
    
//      var singup_setdata = new singup_schema({

//         fullname:req.body.fullname,
//         username:req.body.username,
//         email:req.body.email,
//         password:token,
//         status:req.body.status,
//         userid:req.body.userid
//     });
//     // save
//     singup_setdata.save().then(data=>{
//             //    console.log(res);    
//                  console.log("success");
//                  res.json(data);
//                 //  res.end("successfully")
//              }).catch(err=>{
//                  console.log("Not inserted");
//                  res.json(err);
//              })
//             }
//              // login

//     exports.loginusers = (req, res) => {
//         var username=req.body.username;
//         var userpwdpassword = req.body.password;
//         singup_schema.findOne({"username":ulsername})
//         .then(data => {
//          console.log(data);
//             // console.log(data.password);
//             var check = jwt.verify(data.password,userpwdpassword);
//             if(check==userpwdpassword)
//             {
//                 console.log("matched")
//                 res.json("success");
//             }
//         }).catch(err => {
            
//             console.log(err);
//             res.json(err);
//         });
//     }

//     // see users
// exports.seeusers = (req, res) => {
//     singup_schema.find()
//     .then(data => {
//         res.json(data);
//         console.log(data);
//     }).catch(err => {
        
//         console.log(err);
//         res.json(err);
//     });
// }
// // update users


// exports.updateusers = (req, res) => {
// var updateusername = req.body.username;
// var updatepassword = req.body.password;
//     var updatetoken = jwt.sign(updateusername,updatepassword);
//     singup_schema.findOneAndUpdate({"username":updateusername},{$set:{password:updatetoken}},function(err, result){
//         if(err){
//             res.json(err);
//             console.log(err)
//         }
//         if(result)
//         {
//             res.json("update_success");
//             var a = jwt.decode(updatetoken,updatepassword)

//             console.log("updated user"+a);
//         }
//     })
   
// }
// // delete users
// exports.deleteusers = (req, res) => {
//     singup_schema.findOneAndDelete(req.body.userid)
//     .then(data => {
//         res.json("deleted_success"+data);
//         console.log("deleted");
//     }).catch(err => {
    
//          console.log(err);
//          res.json("not deleted or null "+err);
//     });
// }


// exports.qst = (req,res)=>{

// // bodyparser
//  var qst = new models_schema({
//     question_id:2,
//     question:req.body.question,
//     option1:req.body.option1,
//     option2:req.body.option2,
//     option3:req.body.option3,
//     option4:req.body.option4,
//     keyAnswer:req.body.keyAnswer
// });
// // save
//  qst.save().then(data=>{
//      console.log("success");
//      res.json("success"+data);
//  }).catch(err=>{
//      console.log("Not inserted");
//      res.json(err);
//  })
// }

// // get question
// exports.getquestion = (req, res) => {
//     models_schema.find()
//     .then(data => {
//         res.json(data);
//         console.log(data);
//     }).catch(err => {
        
//         console.log(err);
//         res.json(err);
//     });
// }

// // delete question
// exports.deletequestion = (req, res) => {
//     models_schema.findOneAndDelete(req.body.question_id)
//     .then(data => {
//         res.json("deleted");
//         console.log("deleted");
//     }).catch(err => {
    
//          console.log(err);
//          res.json(err);
//     });
// }

// // update question


// exports.updatequestion = (req, res) => {
//     models_schema.findOneAndUpdate(req.body.question_id,{$set:{question:req.body.question,option1:req.body.option1,option2:req.body.option2,option3:req.body.option3,option4:req.body.option4,keyAnswer:req.body.keyAnswer}},function(err, result){
//         if(err){
//             res.json(err);
//             console.log(err)
//         }
//         if(result)
//         {
//             res.json("updated");
//             console.log("updated");
//         }
//     })
   
// }

