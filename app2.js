var http = require('http');
var fs = require('fs');
var graphJS = require('./forcedGraph').graphThis();
var miserables = require('./data/miserables.json');

http.createServer(function(req, res) {

	res.writeHead(200, { 'Content-Type': 'text/html' });
	var miserables = JSON.parse(fs.readFileSync("miserables.json", 'utf8'));
	var html = fs.readFileStream(__dirname + '/forced_graph_les_miserables.html').pipe(res);
}).listen(1337, '127.0.0.1');