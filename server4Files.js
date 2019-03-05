var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req, res) {
  var parsed_url = url.parse(req.url);
  var query_file = parsed_url.pathname;
  if (query_file == '/') query_file = "/index.html";
  var file_path = "./www" + query_file;

  //res.end("fichier demande :" + query_file);

  fs.readFile(file_path, function (err, data) {
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
}).listen(8080);