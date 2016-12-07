var socket = io('http://localhost:3000');

$('span').click(function(){
	socket.emit('event', {});
});