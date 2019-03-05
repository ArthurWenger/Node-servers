var fs = require('fs');
var app = require('http').createServer(handler);
// utiliser npm install socket.io --save  
var io = require('socket.io')(app);

app.listen(80, function () {
  console.log("listening on port 80");
});


function handler(req, res) {
  fs.readFile('SocketIO.html', function (err, data) {
    if (err) {
      console.log(err);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write("Erreur = " + JSON.stringify(err));
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
}

io.on('connection', function (socket) {
  console.log("a user connected");

  //socket.emit('chat message', { message: 'welcome to the chat' });

  /*socket.on('chat message', function (msg) {
    console.log("msg detected");
    io.emit('chat message', msg);
  });*/
});



