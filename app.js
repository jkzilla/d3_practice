const http = require('http');
const fs = require('fs');
// const graphJS = require('./forcedGraph').graphThis();
const miserables = require('./miserables.json');

var server = http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  var file = 'forced_graph_les_miserables.html';
  var html = fs.readFileSync(file);
  response.end(html, 'binary');
}).listen(1337, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});

