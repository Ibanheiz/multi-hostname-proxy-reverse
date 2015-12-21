"use strict";

var core   = require('./../lib/core');

describe("Testing application of core functions", function () {
  it("Domain 'ibanheiz.com' in core should be return property 'domain' and 'origin' equals 'ibanheiz'", function () {
    var parsedHost = core.parseHost('ibanheiz.com');
    parsedHost.domain.should.be.equal('ibanheiz');
    parsedHost.origin.should.be.equal('ibanheiz');
  });

  it("Domain 'ibanheiz.com.br' in core should be return property 'domain' and 'origin' equals 'ibanheiz'", function () {
    var parsedHost = core.parseHost('ibanheiz.com.br');
    parsedHost.domain.should.be.equal('ibanheiz');
    parsedHost.origin.should.be.equal('ibanheiz');
  });

  it("Domain 'api.ibanheiz.com' in core should be return property 'domain' and 'origin' equals 'ibanheiz'", function () {
    var parsedHost = core.parseHost('api.ibanheiz.com');
    parsedHost.domain.should.be.equal('ibanheiz');
    parsedHost.origin.should.be.equal('api');
  });

  it("Core should be return a json object with ", function () {
    var parsedHost = core.parseHost('api.ibanheiz.com');
    parsedHost.domain.should.be.equal('ibanheiz');
    parsedHost.origin.should.be.equal('api');
  });

  it("When domain equals 'ibanheiz' and origin equals 'locprime', target should be 'http://localhost:5000'", function () {
    var target = core.findTarget('ibanheiz', 'locprime');
    target.should.be.equal('http://localhost:5000');
  });
});
