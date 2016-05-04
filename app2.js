var http = require('http');
var fs = require('fs');
var graphJS = require('./static/forcedGraph.js');
var miserables = require('./data/miserables.json');

http.createServer(function(req, res) {

	res.writeHead(200, { 'Content-Type': 'text/html' });
	
	var miserables = JSON.parse(fs.readFileSync("./data/miserables.json", 'utf8'));

	var html = fs.readFile('./forced_graph_les_miserables.html', "utf8", (err, data) => {
		
		if (err) return res.end(err);

		console.log("data:" + data);
		res.end(data);
	});

}).listen(1337, '127.0.0.1');

// 1. hand json to html and render within html in <script> tags => put json as text into the markup 
// 2. make an ajax call to server and have the server create a separate route to return JSON
// 3. (not recommended) have the browser access the file directly - using web browser as a file server 
// 		- how a person would access an image