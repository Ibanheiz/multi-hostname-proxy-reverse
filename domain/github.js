module.exports = function () {
  return {
    domain: 'github',
    routes: [
      {
        origin: 'github',
        target: 'http://help.github.com',
        port: 80
      },
      {
        origin: 'gist',
        target: 'http://gist.github.com/',
        port: 80
      }
    ]
  }
};