module.exports = function () {
  return {
    domain: 'example',
    routes: [
      {
        origin: 'example',
        target: 'http://localhost',
        port: 8080
      },
      {
        origin: 'blog',
        target: 'http://localhost',
        port: 3000
      }
    ]
  };
};