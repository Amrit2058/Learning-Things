// const fs = require('fs');
// const rs = fs.createReadStream('./demofile.txt');

// rs.on('open', function() {
//     console.log('The file is open.');
// });


const events = require('events');
const eventEmitter = new events.EventEmitter();

const myEventHandler = function() {
    console.log('I hear a scream!');
}
eventEmitter.on('scream', myEventHandler)
eventEmitter.emit('scream');