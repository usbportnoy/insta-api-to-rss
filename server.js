var express = require('express');
var app = express();
var api = require('instagram-node').instagram();

api.use({ client_id: 'client_id',
         client_secret: 'client_secret' });

var redirect_uri = 'http://localhost:8080/login';


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

exports.authorize_user = function(req, res) {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

exports.handleauth = function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send("Works");
        // var options = { count:100 }
        // ig.user_self_feed([options,] function(err, medias, pagination, remaining, limit) {
        //   console.log(err);
        //   res.send(medias);
      });
    }
  });
};

app.get('/authorize_user', exports.authorize_user);
// This is your redirect URI
app.get('/login', exports.handleauth);
