const express = require('express');
const request = require('request');
const https = require('https');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.emailAdress;
    console.log(firstName, lastName, email);

    const data = {
        members: [
            {
                email_address : email,
                status : 'subscribed',
                merge_fields : {
                    FNAME : firstName,
                    LNAME : lastName
                }

            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const mailchimpUrl = "https://us21.api.mailchimp.com/3.0/lists/a40a62bebd";

    const options = {
        method : 'POST',
        auth : 'slavSenkiv:034d67f80c567aa59e589e306b1f6d58-us21'
    }

    const request = https.request(mailchimpUrl, options, function(responce){
        responce.on('data', function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.listen(3000, function(){
    console.log('Server is up and listening to port 3000');
});

//034d67f80c567aa59e589e306b1f6d58-us21 mailchimp api key
//a40a62bebd mailchimp audience id