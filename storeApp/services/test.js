var bus = require('servicebus').bus();
bus.listen('my.event', function (event) {
  console.log(event);
});

console.log('service bus');