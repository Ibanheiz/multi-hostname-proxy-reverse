var should = require('should'),
    fs = require('fs'),
    domains = fs.readdirSync('./domain');

describe('Testing domains files', function () {
  it('Domains should be have domain property', function () {
    domains.forEach(function (file) {
      var domain = require('./../domain/' + file)();
      domain.should.have.property('domain');
    });
  });

  it('Domains should be have routes property and length greater then 1', function () {
    domains.forEach(function (file) {
      var domain = require('./../domain/' + file)();
      domain.should.have.property('routes');
      var length = domain.routes.length;
      length.should.be.above(1);
    });
  });

  it("Property route should be have 'origin' and have type String", function() {
    domains.forEach(function (file) {
      var domain = require('./../domain/' + file)();
      domain.routes.forEach(function (route) {
        route.should.have.property('origin');
        route.origin.should.be.String;
      });
    });
  });

  it("Property route should be have 'target', have type String and start with 'http://'", function() {
    domains.forEach(function (file) {
      var domain = require('./../domain/' + file)();
      domain.routes.forEach(function (route) {
        route.should.have.property('target');
        route.target.should.be.String;
        route.target.should.startWith('http://');
      });
    });
  });

  it("Property route should be have 'port', have type Number and value between 0 and 65536", function() {
    domains.forEach(function (file) {
      var domain = require('./../domain/' + file)();
      domain.routes.forEach(function (route) {
        route.should.have.property('port');
        route.port.should.be.a.Number;
        route.port.should.within(0, 65536);
      });
    });
  });
});