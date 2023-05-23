var express=require('express');
var app=express();
app.route('/Student').get(function(req,res){
    console.log("student");
    res.send("Student Data");

});
app.route('/Result').get(function(req,res){
    console.log("result");
    res.send("Result Details");
});
app.get('/',function(req,res){
    console.log("Home");
    res.send("Home page");
});
app.listen(5000);