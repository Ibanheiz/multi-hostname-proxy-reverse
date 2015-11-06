module.exports = function () {
  return {
    domain: 'nicolas',
    routes: [
      {
        origin: 'nicolas',
        target: 'http://www.jovetecnologia.com',
        port: 80
      },
      {
        origin: 'mean-template',
        target: 'http://www.google.com',
        port: 80
      }
    ]
  }
};