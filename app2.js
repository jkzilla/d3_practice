var http = require('http');
var fs = require('fs');
var graphJS = require('./static/forcedGraph.js');
var miserables = require('./data/miserables.json');

http.createServer(function(req, res) {

	res.writeHead(200, { 'Content-Type': 'application/json' });
	
	var miserables = JSON.parse(fs.readFileSync("./data/miserables.json", 'utf8'));
	var html = fs.readFile('./forced_graph_les_miserables.html', (err, data) => {
		if (err !== null ) throw err;
		console.log(data);
		console.log(err);
	});

	res.end();

}).listen(1337, '127.0.0.1');