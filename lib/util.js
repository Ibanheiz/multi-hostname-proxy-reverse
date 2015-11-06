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
    var dnsObject = require('./../dns/' + domain)
        ,routes = dnsObject().routes
        ,route = _getTargetByRoute(routes, origin);
    return route[0].target;
  }
};

function _getTargetByRoute(routes, origin) {
  return routes.filter(
      function (routes) {return routes.origin == origin}
  );
}