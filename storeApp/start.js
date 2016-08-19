var exec = require('child_process').exec;

function init(command) {
    var app = exec(command);

	app.stdout.on('data', function(data) {
	    console.log('stdout: ' + data);
	});
	app.stderr.on('data', function(data) {
	    console.log('stdout: ' + data);
	});
	app.on('close', function(code) {
	    console.log('closing code: ' + code);
	});

}

var command = 'node ';
var paths = ['./app.js', './services/test.js'];

paths.forEach(function(path) {
	init(command + path)
})
