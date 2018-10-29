var express = require('express');
var fs = require('fs');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('Listening for requests on port 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle event
    socket.on('log', function(){
        const file1 = fs.readFileSync('./dealer_log_2.json');
        const log_file = JSON.parse(file1);
        console.log(log_file);
        socket.emit('log', log_file);
    });

    socket.on('ranking', function(){
        const file2 = fs.readFileSync('./dealer_ranking_2.json');
        const ranking_file = JSON.parse(file2);
        console.log(ranking_file);
        socket.emit('ranking', ranking_file);
    });

});
