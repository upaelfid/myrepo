
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

// Render homepage (note trailing slash): example.com/
app.get('/interior', function(request, response) {
  var data = fs.readFileSync('interior.html').toString();
  response.send(data);
});


/*
// Render example.com/orders
app.get('/exterior', function(request, response) {
    // Uses views/orders.ejs
    response.render("orders", {orders: orders_json});
  }).error(function(err) {
    console.log(err);
    response.send("error retrieving orders");
  });
});
*/


app.get('/contact', function(request, response){
  // do stuff
  response.send('Hello World!');
});

app.use("/",express.static(__dirname+"/"));

app.listen(port, function() {
  console.log("Listening on " + port);
});

