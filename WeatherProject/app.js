const express = require("express");
const app = express();
const https = require("https");

app.get('/', function(req, res){
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=49&lon=23&appid=abd9dd7f7b314d3b1281bccb7e2a1e44';
    https.get(apiUrl, function(responce){
        console.log(responce.statusCode);

        responce.on('data', function(data){
            console.log(data);
            var jsonData = JSON.parse(data);
            var temp = jsonData.main.temp;
            console.log(jsonData);
            console.log(temp);
            console.log(jsonData.weather[0].description)
        });
    })

    res.send('server is up and runninng!');
})
app.listen(3000, function(){
    console.log("server is listening to port 3000");
})