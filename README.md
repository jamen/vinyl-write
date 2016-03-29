# vinyl-write
> Quickly write vinyl files using callbacks, promises, or streams.

## Installation
```shell
$ npm install --save vinyl-write
```

## Usage
### `write(file, [callback])`
  - `file` ([`File`][vinyl]): The vinyl file to write.
  - `callback` (`function`): Optional callback system.

If a callback is not supplied, it wraps/returns a `Promise` instead.

Use [`promise-routine`][routine] in parity with this module to write multiple files at once.

Examples:
```javascript
// Using with callback
write(file, function(err) {
  // ...
});

// Using with promise
write(file)
.then(...)
.catch(...);

// Using with promise-routine to write multiple
routine(write, ...files)
.then(...)
.catch(...);
```

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

## License
[MIT](LICENSE) &copy; Jamen Marzonie

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
  [vinyl]: https://github.com/gulpjs/vinyl
  [routine]: https://github.com/jamen/promise-routine
