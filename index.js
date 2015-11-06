var http = require('http');
var httpProxy = require('http-proxy');
var util = require('./lib/util');
var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  var host = req.headers.host
  ,domain = util.parseHost(host).domain
  ,origin = util.parseHost(host).origin
  ,target = util.findTarget(domain, origin);

  proxy.web(req, res, {target: target});
});

console.log("listening on port 3080")
server.listen(3080);