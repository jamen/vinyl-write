var fs = require('fs')
var mkdirp = require('mkdirp')
var eventcb = require('event-callback')

module.exports = write

function write (file, callback) {
  // Create necessary directories for file
  mkdirp(file.dirname, function (err) {
    if (err) return callback(err)

    // Write contents to file system
    if (file.isStream()) {
      var writer = file.contents.pipe(fs.createWriteStream(file.path))
      eventcb(writer, 'finish', callback)
    } else {
      fs.writeFile(file.path, file.contents, callback)
    }
  })
}
