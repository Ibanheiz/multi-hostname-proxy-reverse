var should = require('should');
var fs = require('fs');
var domains = fs.readdirSync('./domain')

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
});