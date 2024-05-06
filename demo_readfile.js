// Read Files-------------------------------------------------

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('demofile1.html', (err, data) => {
//         res.writeHead(200, {'content-type': 'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080);



// Create Files--------------------------------------------------------------------

// const fs = require('fs')

// fs.appendFile('mynewfile1.txt', 'Hello Hello', (err) => {
//     if(err) throw err;
//     console.log('saved!')
// })


// const fs = require('fs')

// fs.open('mynewfile2.txt', 'w', function(err, file) {
//     if (err) throw err;
//     console.log('saved')
// })


// const fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello Content', (err) => {
//     if (err) throw err;
//     console.log('saved');
// });



// Update Files--------------------------------------------------------------------

// const fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('updated');
// })


// const fs = require('fs');

// fs.appendFile('mynewfile3.txt', 'This is my new text', (err) => {
//     if (err) throw err;
//     console.log('Replaced');
// });



// Delete FIles-------------------------------------------------

// const fs = require('fs');

// fs.unlink('mynewfile2.txt',  function(err) {
//     if (err) throw err;
//     console.log('File deleted');
// });



// Rename Files-----------------------------------------------

// const fs = require('fs');

// fs.rename('myrenamedfile.txt', 'mynewfile1.txt', function(err) {
//     if (err) throw err;
//     console.log('File Renamed');
// });
