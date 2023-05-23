var express=require('express');
var app=express();

// app.use('/user/:id',(req,res,next)=>{
//     console.log("Requset id "+req.params.id);
//     next();
// }
// ,(req,res,next)=>{
//     res.send("User");
// })
// app.listen(3000);


// app.use(middleware1);
// app.use(middleware2);
 
// function middleware1(req,res,next){
//     console.log("middleware 1");
//     next();
// }
// function middleware2(req,res,next){
//     console.log("middleware 2");
//     var err=new Error();
//     next(err);
// }
// function errHandler(err,req,res,next){
//     res.send("getting error wait a while");
//     next();
// }
// app.get('/',(req,res)=>{
//     console.log("main method");
//     res.send("Using middleware");
// })
// app.use(errHandler);

// app.listen(3000);











const bodyParser = require('body-parser');
const router = express.Router();

router.get('/home', (req,res) => {
  res.send('Hello World, This is home router');
});

router.get('/profile', (req,res) => {
  res.send('Hello World, This is profile router');
});

router.get('/login', (req,res) => {
  res.send('Hello World, This is login router');
});

router.get('/logout', (req,res) => {
  res.send('Hello World, This is logout router');
});



app.use(router);
app.get('/',(req,res)=>{
    res.send("Home page");
})

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));



