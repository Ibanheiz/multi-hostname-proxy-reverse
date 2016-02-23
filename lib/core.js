"use strict";
var config = require('./../config');

function _getRouteByOrigin(routes, origin) {
  return routes.filter(
    function (routes) {
      return routes.origin === origin;
    }
  );
}

function _removeTlds(host) {
  config.tlds.forEach(function (tld) {
    host = host.replace(tld, '');
  });
  return host;
}

function _removeThirdLevelDomain(host) {
  return  host.replace(config.thirdLevelDomain, '');
}

module.exports = {
  parseHost: function (host) {
    var globalHost = _removeTlds(host),
        globalHost = _removeThirdLevelDomain(globalHost),
        hostArray = globalHost.split('.'),
        domain,
        origin;

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
    };
  },
  findTarget: function (domain, origin) {
    var dnsObject = require('./../domain/' + domain),
        routes = dnsObject().routes,
        route = _getRouteByOrigin(routes, origin);
    return route[0].target + ':' + route[0].port;
  }
};