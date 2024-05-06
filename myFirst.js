const http = require('http');
const  dt = require('./myfirstmodule');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.end();
}).listen(8080);