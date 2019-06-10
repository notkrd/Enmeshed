const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 3000;

app.use(express.static('static'));

io.on('connection', (socket) => {
    console.log('What\'re they doing here??');
    socket.on('a messenger', (msg) => {
        console.log('they carry: ' + msg);
        io.emit('a messenger', msg);
    });
    socket.on('disconnect', () => {
        console.log("Must be no one.");
    });
});

http.listen(port, () => console.log('Whatever forests might previously have existed were made illegible by several thousand years\' continuous human habitation and logging.'));