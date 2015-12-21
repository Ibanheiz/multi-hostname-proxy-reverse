module.exports = function () {
  "use strict";
  return {
    domain: 'ibanheiz',
    routes: [
      {
        origin: 'ibanheiz',
        target: 'http://localhost',
        port: 4000
      },
      {
        origin: 'jenkins',
        target: 'http://localhost',
        port: 8080
      },
      {
        origin: 'locprime',
        target: 'http://localhost',
        port: 5000
      }
    ]
  };
};