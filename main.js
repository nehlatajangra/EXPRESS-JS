// app.post('/dataTbale',(req,res) => {
//     // after some processing i get array of obj that i store in result variable
//     const result=[{name:'james', id:23},{name:'joe',id:35}];
//     res.send('table.html');
//   })

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
            //   res.send(data);
              res.send('table.html');

  
          });
  });
  app.listen(4000);