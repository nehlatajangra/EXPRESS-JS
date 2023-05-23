var express=require('express');
var app=express();
app.set('view engine','jade');

app.get('/',function(req,res)
{
    res.render('index',
{title:'DynamicTitle', message:'hii from index.jade using server.js'})
});

var server=app.listen(5000,function(){});


// var express=require('express');
// var app=express();
// app.set('view engine','jade');
// app.get('/',function(req,res)
// {
// res.render('index',
// {title:'Guru99',message:'Welcome'})
// });
// var server=app.listen(3000,function() {});