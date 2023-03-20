const express = require('express');
const app = express();

/* app.get('/', function(req, res){
    res.send('<h1>hello there1</h1>');
});
app.get('/sidepage', function(req, res){
    res.send('<h1>side page</h1>');
});
app.get('/thirdpage', function(req, res){
    res.send('<h1>third page</h1>');
}); */
app.get('/', function(req, res){
    /* console.log(__dirname, __filename); */
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
    console.log('server is listening')});