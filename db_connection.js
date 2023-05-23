// var sql=require("mysql");
// var con=sql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: ""
// });

// //####################################create database################################3

// con.connect(function(err){
//     if(err){
//          console.log(err);
//     }
//     else{
//     console.log("Connection created");
//     }

//     con.query("CREATE DATABASE mydb",function(err){
//         if(err){
//              console.log(err);
//         }
//         else {
//         console.log("database created")
//         }
//     })
// })




var sql=require("mysql");
var con=sql.createConnection({
      host: "localhost",
      database:"mydb",
  user: "root",
  password: ""
});
// // ############################## craete table #################################

// con.connect(function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("connected");
//     }
//     var sql="CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql,function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Table Created");
//         }
//     })
// })

// // ##################################add data #####################################

// con.connect(function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("connected");
//     }
//     var sql="INSERT INTO customers (name, address) VALUES ('CloudEQ Company ', 'Chandigarh')";
//     con.query(sql,function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Row Created");
//         }
//     })
// })



// // ######################################## show data ####################
// con.connect(function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("connected");
//     }
//     var sql="select * from customers";
//     con.query(sql,function(data,err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("show data ------------------",data);
            
//         }
//     })
// })

