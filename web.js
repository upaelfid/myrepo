/*var express = require('express');
var fs = require('fs');
var theIndexfile ="index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(theIndexfile,'utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});*/


// Define routes for simple SSJS web app. 
// Writes Coinbase orders to database.

var express = require('express');
var fs      = require('fs');
 
var port = process.env.PORT || 8080;
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

// Render homepage (note trailing slash): example.com/
app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html').toString();
  response.send(data);
});

app.use("/img",express.static(__dirname+"/img"));

app.listen(port, function() {
  console.log("Listening on " + port);
});

