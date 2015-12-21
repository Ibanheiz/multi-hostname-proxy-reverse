"use strict";

function _buildHtmlError(data, err, errorObject) {
  data = data.replace('#ErrorTitle', errorObject.property.title);
  data = data.replace('#ErrorMessage', errorObject.property.message);
  data = data.replace('#ErrorDomain', err.hostname);
  data = data.replace('#ErrorPort', err.port);
  return data;
}

module.exports = {
  send: function (err, res) {
    var fs        = require('fs'),
        errorMap  = require('./errorMap'),
        errorCode = err.code,
        errorObject = errorMap[errorCode];

    res.writeHead(res.statusCode, {
      'Content-Type': 'text/html'
    });

    fs.readFile('./error-handler/error.html', 'utf8', function (errFile, data) {
      if (errFile) {
        console.log(errFile);
      }
      if (typeof errorObject === 'undefined') {
        errorObject = errorMap.DEFAULT;
      }
      res.end(_buildHtmlError(data, err, errorObject));
    });
  }
};