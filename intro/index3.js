const express = require('express');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
var app = express();
var server = app.listen(8080);
var io = socketio(server);
var room = null;
io.on('connection', client => {
    var now = Date.now();
    //console.log(now);
    
    if((now % 2) == 0) {
        room = 'even';
        client.join(room);
    } else {
        room = 'odd';
        client.join(room);
    }

    // console.log(client.rooms);
    // Object.keys(client.rooms).forEach(k => {
    //     console.log('k =>' + k)
    // })

    io.to(room).emit('event', room + ' Room ' + now);

    setTimeout(() => { // 
        io.to('even').emit('event', 'Even Room ' + now);
        io.to('odd').emit('event', 'Odd Room ' + now);
    }, 10000)
    
})

app.use(express.static('static'))




