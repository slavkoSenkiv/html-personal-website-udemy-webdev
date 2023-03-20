const express = require('express');

const app = express();

app.get('/', function(req, res){
    /*     console.log(request); */
    res.send('<h1>hello</h1>');
})
app.get('/contact', function(req, res){
    /*     console.log(request); */
    res.send('<p>contact me via email <em>slavko.senkiv@gmail.com</em>. Se ya*ll</p>');
})
app.get('/about', function(req, res){
    /*     console.log(request); */
    res.send('<p>I work with <strong>IAP</strong> monetization and and learn how to implement my saas idea right now');
})
app.get('/myhobbies', function(req, res){
    /*     console.log(request); */
    res.send('<ul><li>Web dev</li><li>plast</li><li>outdorr</li></ul>');
})

app.listen(3000, function(){
    console.log('sever started on port 3000');
});