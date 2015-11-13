module.exports = {
  send: function (err, res) {
    var fs = require('fs');
    var errorMap = require('./errorMap');
    var errorCode = err.code;
    var erro;

    res.writeHead(res.statusCode, {
      'Content-Type': 'text/html'
    });

    fs.readFile('./error-handler/error.html', 'utf8', function (errFile, data) {
      if (errFile) {
        console.log(errFile);
      }
      data = data.replace('#ErrorTitle', errorMap[errorCode].property.title);
      data = data.replace('#ErrorMessage', errorMap[errorCode].property.message);
      data = data.replace('#ErrorDomain', err.hostname);
      data = data.replace('#ErrorPort', err.port);
      res.end(data);
    });
  }
};

