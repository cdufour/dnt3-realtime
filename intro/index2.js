const express = require('express');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
var app = express();
var server = app.listen(8080);
var io = socketio(server);
var nbLikes = 0;

io.on('connection', client => {
    console.log('client connecté ' + client.id);
    io.emit('likeServ', nbLikes);

    client.on('like', (data) => {
        console.log('le client a aimé ('+ data.sport +')');
        nbLikes += 1;

        // émettre l'évenement à destination des clients en relation avec le sport
        io.emit('likeServ', nbLikes); // tous les clients sont notifiés

    })
})

app.use(express.static('static'))




