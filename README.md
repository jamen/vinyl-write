# vinyl-write [![NPM version](https://badge.fury.io/js/vinyl-write.svg)](https://npmjs.org/package/vinyl-write) [![Build Status](https://travis-ci.org/jamen/vinyl-write.svg?branch=master)](https://travis-ci.org/jamen/vinyl-write)

> Write vinyl objects to the file system

```javascript
const write = require('vinyl-write')
const Vinyl = require('vinyl')

// Get a `Vinyl` object somehow
const file = new Vinyl({ ...options })

// Write it
write(file, function (err) {
  if (err) console.error(err)
})
```

## Installation

```shell
$ npm install --save vinyl-write
```

## Usage

### `write(file, [callback])`

Writes a [`Vinyl`](https://github.com/gulpjs/vinyl) object to the file system, with a completion callback.

  - `file` (`Vinyl`): Vinyl object you are writing.
  - `callback` (`function`): Optional completion callback.

The callback receives `(err)` as parameter.

```javascript
write(file, function (err) {
  // ...
})
```

## License

[MIT](LICENSE) &copy; Jamen Marzonie
