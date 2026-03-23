const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('response', (name) => {
    console.log(`data recieve ${name}`);
})

emitter.on('response', (name) => {
    console.log(`this is a different response that still listens to the same event ${name} `);
});

emitter.emit('response', "Amiaka Kingsley Dinso")