module.exports = function () {
  return {
    domain: 'joaquim.com',
    routes: [
      {
        origin: 'joaquim',
        target: 'http://www.google.com',
        port: 80
      },
      {
        origin: 'mean-template',
        target: 'http://www.jovetecnologia.com',
        port: 80
      }
    ]
  }
};