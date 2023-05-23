var express=require('express');
var app=express();

app.get('/',function(req,res){
    var sql=require("mysql");
    var con=sql.createConnection({
        user:'root',
        password:'',
        server:'localhost',
        database:'mydb',
    });
    con.connect(function(err){
        if (err){
            console.log(err)
        }    })
        con.query("Select * from customers",function(err,data){
            if(err) console.log(err);
            res.send(data);
            console.table(data)

        });
});
app.listen(4000);