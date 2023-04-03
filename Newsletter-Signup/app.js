const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/signup.html');
});

app.listen(3000, function(){
    console.log('server is up and listening to port 3000');
});
