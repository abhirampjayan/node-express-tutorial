const EventEmitter = require("events");

//create class
class MyEmitter extends EventEmitter {}
// init object
const myEmitter = new EventEmitter();
//  Event listener
myEmitter.on('event',()=>console.log('Fired'))

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')