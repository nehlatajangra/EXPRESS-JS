// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('<html><body><h1>Hello World</h1></body></html>');
// });

// app.post('/submit-data', function (req, res) {
//     res.send('POST Request');
// });

// app.put('/update-data', function (req, res) {
//     res.send('PUT Request');
// });

// app.delete('/delete-data', function (req, res) {
//     res.send('DELETE Request');
// });

// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });



// var express = require('express');
// var app = express();

// var bodyParser=require('body-parser');
// app.use(bodyParser.urlencoded({extended:false}));

// app.get('/',function(req,res){
//     res.sendFile('./index.html');
// });
// app.post("/posting",function(req,res){
//     var name=res.body.firstName+ ' '+res.body.lastName;
//     res.send(name+' submitted successfully');
// });
// app.listen(3000,function(){});

var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
   
    // res.sendFile('index.html');//path error
    
    res.sendFile('index.html', { root: '.' })
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
