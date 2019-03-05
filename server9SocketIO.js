var app = require('http').createServer(handler);
// utiliser npm install socket.io --save 
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler(req, res) {
  fs.readFile(__dirname + '/SocketIO3.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200);
      res.end(data);
    });
}

io.on('connection', function (socket) {
  console.log("user connected");
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('chat message', function (data) {
    console.log("msg detected");
    io.emit('chat message', data);
  });
});