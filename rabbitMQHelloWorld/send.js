#!/usr/bin/env node

//add library
var amqp = require('amqplib/callback_api');

//connect to rabbitMQ Server
amqp.connect('amqp://localhost', function(err, conn) {

	//connect channel
	conn.createChannel(function(err, ch) {

		var q = 'hello';

	    ch.assertQueue(q, {durable: false});
	    // Note: on Node 6 Buffer.from(msg) should be used
	    ch.sendToQueue(q, new Buffer('Hello World!'));
	    console.log(" [x] Sent 'Hello World!'");
	    setTimeout(function() { conn.close(); process.exit(0) }, 500);

	});

});

