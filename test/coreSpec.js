"use strict";

var core   = require('./../lib/core');

describe("Testing application of core functions", function () {
  it("Domain 'www.example.com' in core should be return property 'domain' and 'origin' equals 'example'", function () {
    var parsedHost = core.parseHost('www.example.com');
    parsedHost.domain.should.be.equal('example');
    parsedHost.origin.should.be.equal('example');
  });

  it("Domain 'example.com.br' in core should be return property 'domain' and 'origin' equals 'example'", function () {
    var parsedHost = core.parseHost('example.com.br');
    parsedHost.domain.should.be.equal('example');
    parsedHost.origin.should.be.equal('example');
  });

  it("Domain 'api.example.com' in core should be return property 'domain' and 'origin' equals 'example'", function () {
    var parsedHost = core.parseHost('api.example.com');
    parsedHost.domain.should.be.equal('example');
    parsedHost.origin.should.be.equal('api');
  });

  it("Core should be return a json object with ", function () {
    var parsedHost = core.parseHost('api.example.com');
    parsedHost.domain.should.be.equal('example');
    parsedHost.origin.should.be.equal('api');
  });

  it("When origin equals 'aws', target should be 'http://aws.amazon.com:80'", function () {
    var target = core.findTarget('example', 'aws');
    target.should.be.equal('http://aws.amazon.com:80');
  });
});