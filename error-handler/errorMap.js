"use strict";
module.exports = {
  'ENOTFOUND': {
    property : {
      title: 'Page not found',
      message: 'Check the reverse proxy domain, maybe it does not exist.'
    }
  },
  'ECONNRESET': {
    property : {
      title: 'Time out',
      message: 'Make sure the destination is valid, you may not have permission to access the page or are accessing the invalid port.'
    }
  },
  'DEFAULT': {
    property : {
      title: 'Error in proxy reverse server',
      message: 'Please, verify your JSON Object Domain.'
    }
  }
};