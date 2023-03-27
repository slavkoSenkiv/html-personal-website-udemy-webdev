const express = require("express");
const app = express();
const https = require("https");

app.get('/', function(req, res){
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=49&lon=23&appid=abd9dd7f7b314d3b1281bccb7e2a1e44';
    https.get(apiUrl, function())

    res.send('server is up and running!');
})

app.listen(3000, function(){
    console.log("server is listening to port 3000");
})