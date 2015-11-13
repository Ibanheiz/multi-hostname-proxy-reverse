module.exports = function () {
  return {
    domain: 'example',
    routes: [
      {
        origin: 'example',
        target: 'http://jovetecnologia.com',
        port: 80
      },
      {
        origin: 'blog',
        target: 'http://localhost',
        port: 3000
      }
    ]
  };
};