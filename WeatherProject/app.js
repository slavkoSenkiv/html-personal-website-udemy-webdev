const express = require("express");
const app = express();

app.get('/', function(req, res){
    res.send('server is up and running!');
})

app.listen(3000, function(){
    console.log("server is listening to port 3000");
})