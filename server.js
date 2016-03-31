var express = require('express');
var app = express();
var api = require('instagram-node').instagram();
var keys = require("./keys.js");


var redirect_uri = 'http://localhost:8080/login';

app.get('/', function (req, res) {
    res.send("Please navigate to \<a href=\"http://localhost:8080/authorize_user\">Instagram oAuth</a>");
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

authorize_user = function (req, res) {
    api.use({
        client_id: keys.client_id,
        client_secret: keys.client_secret
    });
    res.redirect(api.get_authorization_url(redirect_uri, {scope: ['basic'], state: 'a state'}));

};

handleauth = function (req, res) {
    api.authorize_user(req.query.code, redirect_uri, function (err, result) {
        if (err) {
            console.log(err.body);
            res.send("Didn't work");
        } else {
            console.log('Yay! Access token is ' + result.access_token);
            api.use({access_token: result.access_token});
            var options = { count: 100 };
            api.user_self_media_recent([options], function(err, medias, pagination, remaining, limit) {
                if(err){
                    res.send(err.body);
                }
                else{
                    res.send(medias);
                }
            });
        }
    });
};

app.get('/authorize_user', authorize_user);
// This is your redirect URI
app.get('/login', handleauth);
