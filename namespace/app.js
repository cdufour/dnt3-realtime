const express = require('express');
const socketio = require('socket.io');

var app = express();
var server = app.listen(8080);
var io = socketio(server);

app.use(express.static('static'));

var namespaceHandler = (namespace) => {
    return (socket) => {
        socket.emit('event', 'Vous avez rejoint ' + namespace.name);
    }
}

var one = io.of('/namespace1');
var two = io.of('/namespace2');

one.on('connection', namespaceHandler(one));
two.on('connection', namespaceHandler(two));

