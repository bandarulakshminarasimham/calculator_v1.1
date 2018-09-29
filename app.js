const http = require('http')
//this is step 2
// exposing default api request and response
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// Send the response body as "Hello World"
	res.end('Hello World\n');
}).listen(5000)
console.log('application running on PORT: 5000 ')
