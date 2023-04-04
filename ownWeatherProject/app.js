const express = require('express');
const https = require('https');

const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res){
    //console.log('this is GET responce via console.log');
    //res.send('this is get responce via app.send');
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    console.log(req.body);
    var city = req.body.cityName;

    var apiKey = 'abd9dd7f7b314d3b1281bccb7e2a1e44';
    var unit = 'metric';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=' + unit;

    https.get(apiUrl, function(apiResponce){
        apiResponce.on('data', function(data){
            var jsonData = JSON.parse(data);
            console.log(jsonData);
            var celsius = jsonData.main.temp;
            var weatherDescription = jsonData.weather[0].description;
            var windSpeed = jsonData.wind.speed;
            var cloudsAmount = jsonData.clouds.all;
            var icon = ' https://openweathermap.org/img/wn/' + jsonData.weather[0].icon + '@2x.png';
            var styledCityName = '<span style="color:red;text-decoration:underline;">' + city + '</span>: '

            res.write('<h1>own Weather Project</h1>');
            res.write('<img src=' + icon + '>')
            res.write('<h2>results for ' + styledCityName + '</h2>');
            res.write('<ul>')
            res.write('<li><p>The temperature at ' + styledCityName + celsius +'</p></li>');
            res.write('<li><p>The weather at ' + styledCityName + weatherDescription +'</p></li>');
            res.write('<li><p>the wind speed at ' + styledCityName + windSpeed +'</p></li>');
            res.write('<li><p>the clouds amount at ' + styledCityName + cloudsAmount +'</p></li>');
            res.write('</ul>')

            res.send();
        });
    });
});


app.listen(3000, function(){
    console.log('server is up and listening to port 3000');
});