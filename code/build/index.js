
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server   = require('http').Server(app);
var io       = require('socket.io')(server);
app.set('port', process.env.PORT || 9090);
app.set('SECRET_KEY', process.env.JWT_SECRET || 'feicobol');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./client')(app);
require('./service')(app);

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
app.set('socket', io);
io.on('connection', function(socket) {
    console.log('socket connection: ', socket.id);
});

