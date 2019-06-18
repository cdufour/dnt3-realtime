const express = require('express');
const socketio = require('socket.io');
const sockets = require('./sockets');
const router = require('./routes');

var app = express();
var server = app.listen(8080);
var io = socketio(server);

app.use('/', router);
app.use(express.static('static'));

var football = io.of('/football');
var tennis = io.of('/tennis');

football.on('connection', sockets.footballNamespace);
tennis.on('connection', sockets.tennisNamespace);
