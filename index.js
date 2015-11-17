var http          = require('http'),
    httpProxy     = require('http-proxy'),
    core          = require('./lib/core'),
    errorHandler  = require('./error-handler/errorHandler'),
    config        = require('./config'),
    proxy         = httpProxy.createProxyServer();

var server        = http.createServer(function(req, res) {
  var host        = req.headers.host,
      parsedHost  = core.parseHost(host),
      domain      = parsedHost.domain,
      origin      = parsedHost.origin,
      target      = core.findTarget(domain, origin);

  proxy.web(req, res, {target: target});

  proxy.on('error', function (err, req, res) {
    errorHandler.send(err, res);
  });
});

console.log("Listening on port " + config.serverPort);
server.listen(config.serverPort);