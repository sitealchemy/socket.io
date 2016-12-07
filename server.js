var io = require('socket.io')(3000);

io.on('connection', function (socket) {
  console.log('connection');

  socket.on('event', function (data) {
    console.log(data);
  });

});