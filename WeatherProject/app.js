const express = require("express");
const app = express();
const https = require("https");

app.get('/', function(req, res){
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=49&lon=23&appid=abd9dd7f7b314d3b1281bccb7e2a1e44';
    https.get(apiUrl, function(responce){
        console.log(responce.statusCode);

        responce.on('data', function(data){
            var jsonData = JSON.parse(data);
            console.log(jsonData);
            var temp = jsonData.main.temp;
            var weather = jsonData.weather[0].description;
            var icon = ' https://openweathermap.org/img/wn/' + jsonData.weather[0].icon + '@2x.png';
            res.write('<h1>the temperature is ' + temp + '</h1>');
            res.write('<p>and the weather is ' + weather + '<p>');
            res.write('<img src="' + icon + '">');
            res.send();
        });
    });
});
app.listen(3000, function(){
    console.log("server is listening to port 3000");
})