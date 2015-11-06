module.exports = {
  parseHost: function (host) {
    var globalHost = host.replace('.br', '')
        ,hostArray = globalHost.split('.')
        ,domain
        ,origin;

    if (hostArray.length > 2) {
      origin = hostArray[0];
      domain = hostArray[1];
    } else {
      domain = hostArray[0];
      origin = domain;
    }

    return {
      domain: domain,
      origin: origin
    }
  },
  findTarget: function (domain, origin) {
    var dnsObject = require('./../domain/' + domain)
        ,routes = dnsObject().routes
        ,route = _getRouteByOrigin(routes, origin);
    return route[0].target + ':' + route[0].port;
  }
};

function _getRouteByOrigin(routes, origin) {
  return routes.filter(
      function (routes) {return routes.origin == origin}
  );
}