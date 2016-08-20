var fs = require("fs");

var express = require('express');
var app = express();

// var json = require('express-json');
var bodyParser = require('body-parser');
// var bus = require('servicebus').bus();


// var handlebars = require('express-handlebars');
var hbs = require('hbs');

var logger = require('morgan');
app.use(logger('dev'));


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 




// handlebars.registerPartial('partial', fs.readFileSync(__dirname + '/views/partial.hbs', 'utf8'));
hbs.registerPartials(__dirname + '/views/partials');
// hbs.registerPartials(__dirname + '/views/partials/head');
 
// app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
// app.use(express.static('public/views'));
// app.use(express.static('public/views', {
//     extensions: ['html', 'htm'],
// }));
app.use(express.static('public/css'));
app.use(express.static('public/javascript'));
app.use(express.static('public/data'));



app.get('/', function(req, res) {
  res.render('index');
});



// app.get('/', function (req, res) {
//   console.log('get content')
//   // bus.send('my.event', data);
//   res.send(index);
// });

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