const http = require('http');

// Create a Server Object:
http.createServer(function (req, res) {
    res.write('Hello World!'); // Write a response to the client
    res.end(); // End the response
}).listen(8080); //The server object listens on port 8080