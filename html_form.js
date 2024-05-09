// Create an Upload Form------------------------------------------------

// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type' : 'text/html'});
//     res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data">');
//     res.write('<input type = "file" name = "filetoupload"><br>');
//     res.write('<input type = "submit">');
//     res.write('</form>');
//     return res.end();
// }).listen(8080);



// Pare the Uploaded File------------------------------------------------------

// const http = require('http');
// const formidable = require('formidable');

// http.createServer(function (req, res) {
//     if(req.url == '/fileupload') {
//         let form = new formidable.IncomingForm();
//         form.parse(req, function(err, fields, files) {
//             res.write('File Uploaded');
//             res.end();
//         })
//     } else {
//         res.writeHead(200, {'content-type': 'text/html'});
//         res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data">');
//         res.write('<input type = "file" name = "filetoupload"><br>');
//         res.write('<input type = "submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(8080);



// Save the File--------------------------------------------------------------

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req, res) {
    if(req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var newpath = 'C:/Users/Amrit' + files.fileupload.originalFilename;
            fs.rename(oldpath, newpath, function(err) {
                if(err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data">');
        res.write('<input type = "file" name = "filetoupload"><br>');
        res.write('<input type = "submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);