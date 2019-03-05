var http = require('http');
var fs = require('fs');
var url = require('url');



http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var parsed_url = url.parse(req.url);
  var query_file = parsed_url.pathname;
  res.end("fichier demande :" + query_file);

  /*fs.readFile('index.html', function (err, data) {
    res.write(data);
    res.end();
  });*/
}).listen(8080);