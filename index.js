var http = require('http');
var httpProxy = require('http-proxy');
var core = require('./lib/core');
var errorHandler = require('./error-handler/errorHandler');
var config = require('./config');
var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  var host = req.headers.host,
      domain = core.parseHost(host).domain,
      origin = core.parseHost(host).origin,
      target = core.findTarget(domain, origin);

  proxy.web(req, res, {target: target});

  proxy.on('error', function (err, req, res) {
    errorHandler.send(err, res);
  });
});

console.log("Listening on port " + config.serverPort);
server.listen(config.serverPort);