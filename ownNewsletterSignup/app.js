const express = require('express');
const https = require('https');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res){
    console.log(req.body);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.emailAdress;

    var audienceID = 'a40a62bebd';
    var mailchimUrl = 'https://us21.api.mailchimp.com/3.0/lists/';
    var myApiKey = '034d67f80c567aa59e589e306b1f6d58-us21';
    var requestLink = mailchimUrl + audienceID;

    var data = {
        members:[{
            email_address: email,
            status: 'subscribed',
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    var jsonData = JSON.stringify(data);

    var options = {
        method: 'POST',
        auth: 'slavSenkiv:' + myApiKey
    };

    const request = https.request(requestLink, options, function(responce){
        responce.on('data', function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});



app.listen(3000, function(){
    console.log('server is up and listening to port 3000');
});