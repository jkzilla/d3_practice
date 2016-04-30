var http = require('http');
var fs = require('fs');
var path = require('path');
var graphJS = require('./forcedGraph').graphThis();
var miserables = require('./data/miserables.json');

var server = http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  console.log(miserables);

  var filename = "/forced_graph_les_miserables.html";
  console.log(filename);
  var ext = path.extname(filename);
  console.log(filename);
  var localPath = __dirname;
	var validExtensions = {
		".html" : "text/html",			
		".js": "application/javascript", 
		".css": "text/css",
		".txt": "text/plain",
		".jpg": "image/jpeg",
		".gif": "image/gif",
		".png": "image/png"
	};
	var isValidExt = validExtensions[ext];

	if (isValidExt) {
		
		localPath += filename;
		fs.exists(localPath, function(exists) {
			if(exists) {
				console.log("Serving file: " + localPath);
				getFile(localPath, response, ext);
			} else {
				console.log("File not found: " + localPath);
				response.writeHead(404);
				response.end();
			}
		});

	} else {
		console.log("Invalid file extension detected: " + ext);
	}
  response.end(filename, miserables, graphJS);
}).listen(1337, "localhost", function () {
	var address = server.address();
	var host = server.address().address;
	var port = server.address().port;
	console.log('App listening at http://%j:%j', host, port);
});

