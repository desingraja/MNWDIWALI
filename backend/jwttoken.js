var express=require('express')
var app=express()
var jwt=require('jsonwebtoken');

app.get('/',(err,res)=>
{
    res.json("connected")
})

app.post('/met',(err,res)=>
{
    var db={
        name:"k",
        status:"lv"
    }
   var dk= jwt.sign(db,"secret")
console.log(dk)
})
app.post('/verify',()=>
{
    jwt.verify(dk,)
})
app.listen(5000)