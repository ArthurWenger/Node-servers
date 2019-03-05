var http = require('http');
var fs = require('fs');
var url = require('url');


var url = require('url');
var http = require('http'), qs = require('querystring');
var server = http.createServer(function (req, res) {
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function (data) { body += data; }); // on "cable" sur l 'evenement de nom data la fonction suivante
    req.on('end', function () { var POST = qs.parse(body); console.log(POST); });
  } else if (req.method == 'GET') {
    var url_parts = url.parse(req.url, true); // true => prend en compte les eventuels arguments supplémentaires (ie ?test=1)
    var tab_assoc_get = url_parts.query;
    var n = 0; // nombre de variables recues
    for (var name in tab_assoc_get) {
      n++;
    }
    console.log(n + " variables recues");

    for (var name in tab_assoc_get) {
      console.log(name + " = " + tab_assoc_get[name]); // /!\ grosse difference entre tab_assoc[name] et tab_assoc.name (on veut la valeur du champs donc l'etiquette est name)
    };
  }
});
server.listen(8080);