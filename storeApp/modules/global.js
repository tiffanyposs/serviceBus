var fs = require('fs');

define(function() {
  
	function readJson(filepath, encoding){

	    if (typeof (encoding) == 'undefined'){
	        encoding = 'utf8';
	    }
	    var file = fs.readFileSync(filepath, encoding);
	    return JSON.parse(file);
	}

	return {
		readJson: readJson
	};

});
