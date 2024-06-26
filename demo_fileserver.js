const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if(err) {
            res.writeHead(404, {'content-type' : 'text/html'});
            return res.end('404 not found');
        }
        res.writeHead(404, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);