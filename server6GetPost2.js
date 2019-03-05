var http = require('http');
var fs = require('fs');
var url = require('url');


var url = require('url');
var http = require('http'), qs = require('querystring');
var server = http.createServer(function (req, res) {
  if (req.method == 'POST') {
    console.log("methode post detectée");
    var body = '';
    req.on('data', function (data) { body += data; });
    req.on('end', function () { var POST = qs.parse(body); console.log(POST); });
  } else if (req.method == 'GET') {
    console.log("methode get detectée");
    var url_parts = url.parse(req.url, true);
    console.log(url_parts.query);
  }
  fs.readFile('form.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});
server.listen(8080);