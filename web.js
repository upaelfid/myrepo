/*// Define routes for simple SSJS web app. 
// Writes Coinbase orders to database.

var express = require('express');
var fs      = require('fs');

var app = express();
app.set('exterior', __dirname + '/Exterior');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);


// Render homepage (note trailing slash): example.com/
app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html').toString();
  response.send(data);
});


// Render exterior (note trailing slash): example.com/
app.get('/Exterior', function(request, response) {
  var data = fs.readFileSync('exterior.html').toString();
  response.send(data);
});

*/

var express = require('express');
var app = express.createServer(express.logger());
var path = require('path');


app.use(express.static(path.join(__dirname, 'views'))); //  "public" off of current is root

//app.listen(8080);
//console.log('Listening on port 8080');
/*
var express = require('express');
var fs = require('fs');
//var theIndexfile ="index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf8'));
});
*/

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

