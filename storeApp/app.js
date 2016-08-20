var fs = require("fs");
var define = require('define');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var bus = require('servicebus').bus();
var favicon = require('serve-favicon');
var hbs = require('hbs');
var json = require('hbs-json');
 

var logger = require('morgan');
var modules = require('./modules/global');

// handlebars.registerPartial('partial', fs.readFileSync(__dirname + '/views/partial.hbs', 'utf8'));
// hbs.registerPartials(__dirname + '/views/partials/head');
// app.engine('handlebars', handlebars({defaultLayout: 'main'}));
// app.use(express.static('public/views'));
// app.use(express.static('public/views', {
//     extensions: ['html', 'htm'],
// }));


//view engine
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


// logger
app.use(logger('dev'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

// static directories
app.use(express.static(__dirname + '/public'));
app.use(express.static('public/css'));
app.use(express.static('public/javascript'));
app.use(express.static('public/data'));
app.use(express.static('/public/images'));

// favicon
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// partials
hbs.registerPartials(__dirname + '/views/partials');

// use json
hbs.registerHelper('json', json);

// homepage
app.get('/', function(req, res) {
  var products = modules.readJson('./public/data/itemsToBuy.json');
  // console.log(json);
  res.render('index', { products: products } );
});


// other pages
app.get('/:id', function (req, res) {
  var filename = req.params.id;
  console.log(filename)
  // bus.send('my.event', data);
  res.render(req.params.id);
});

// app.post('/send-event', function(req, res) {
//   var data = JSON.parse(fs.readFileSync('public/data/data.json'));
//   var count = parseInt(req.body.orderCount);
//   data.counter += count;
//   fs.writeFileSync('public/data/data.json', JSON.stringify(data));

//   bus.send('my.event', data);

//   res.json(data);
// });



app.listen(3000);

console.log('Listening on port 3000')