'use strict';

const fs = require('fs');

module.exports = function write(file, callback) {
  if (typeof callback === 'undefined') {
    return new Promise((resolve, reject) => {
      write(file, err => {
        if (err) return reject(err);
        return resolve();
      });
    });
  }

  if (file.isStream()) {
    return file.contents.pipe(fs.createWriteStream(file.path));
  }

  return fs.writeFile(file.path, file.contents, callback);
};
