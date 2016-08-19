var fs = require("fs");
var express = require('express');
// var json = require('express-json');
var app = express();
var bodyParser = require('body-parser');
var bus = require('servicebus').bus();



app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

 
app.use(express.static('public/views'));
app.use(express.static('public/javascript'));
app.use(express.static('public/data'));


app.get('/', function (req, res) {
  res.send('index.html');
});

app.post('/send-event', function(req, res) {
  var data = JSON.parse(fs.readFileSync('public/data/data.json'));
  var count = parseInt(req.body.orderCount);
  data.counter += count;
  fs.writeFileSync('public/data/data.json', JSON.stringify(data));

  bus.send('my.event', data);

  res.json(data);
});



app.listen(3000)