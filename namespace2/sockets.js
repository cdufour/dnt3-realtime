var footballNamespace = (socket) => {
    socket.emit('message', 'Bienvenue dans la zone football');
    socket.broadcast.emit('message', 'Rayane è molto concentrato su quel che il professore gli sta dicendo')
}

var tennisNamespace = (socket) => {
    socket.emit('message', 'Bienvenue dans la zone tennis');
}

module.exports = { footballNamespace, tennisNamespace };