var fs = require('fs')
var mkdirp = require('mkdirp')
var eventcb = require('event-callback')
var dirname = require('path').dirname

module.exports = write

function write (file, callback) {
  var filepath = file.path

  // Create necessary directories for file
  mkdirp(dirname(filepath), function (err) {
    if (err) return callback(err)

    // Write contents to file system
    if (file.isStream()) {
      var writer = file.contents.pipe(fs.createWriteStream(filepath))
      eventcb(writer, 'finish', callback)
    } else {
      fs.writeFile(filepath, file.contents, callback)
    }
  })
}
