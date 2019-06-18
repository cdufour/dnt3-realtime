const express = require('express');
const socketio = require('socket.io');

var app = express();
var server = app.listen(8080);
var io = socketio(server);

console.log('ok')

app.use(express.static('static'));

io.on('connection', client => {
    console.log('client connecté')

    client.on('move', data => {
        // le serveur informe les clients (les joueurs du nouveau positionnement)
        
        // Avec io.emit tous les joueurs sont notifiés y compris
        // l'auteur de l'événement move
        // io.emit('update position', data); 
        
        // Ici, on préfère la méthode broadcast qui permet
        // à un client de notifier les autres, sans s'inclure lui même
        client.broadcast.emit('update position', data);
    })

})


