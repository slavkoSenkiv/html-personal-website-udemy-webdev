const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

/* app.get('/', function(req, res){
    res.send('<h1>hello there1</h1>');
});
app.get('/sidepage', function(req, res){
    res.send('<h1>side page</h1>');
});
app.get('/thirdpage', function(req, res){
    res.send('<h1>third page</h1>');
    console.log(__dirname, __filename);

}); */

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(' the result is ' + result);
});

app.listen(3000, function(){
    console.log('server is listening on local port 3000')});