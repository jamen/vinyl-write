var test = require('tape')
var write = require('../')
var fs = require('fs')
var Vinyl = require('vinyl')

function clean () {
  try {
    fs.unlinkSync(`${__dirname}/output.txt`)
    fs.unlinkSync(`${__dirname}/output-stream.txt`)
    fs.unlinkSync(`${__dirname}/output/output.txt`)
    fs.rmdirSync(`${__dirname}/output`)
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
}

clean()
test.onFinish(clean)

test('file with buffer contents', function (t) {
  t.plan(2)

  var file = new Vinyl({
    path: `${__dirname}/output.txt`,
    contents: new Buffer('Hello world')
  })

  write(file, function (err) {
    if (err) return t.end(err)
    fs.stat(`${__dirname}/output.txt`, function (err, stat) {
      t.false(err, 'did not error')
      t.true(stat.isFile(), 'created in correct location')
      t.end(err)
    })
  })
})

test('file with stream contents', function (t) {
  t.plan(2)

  var file = new Vinyl({
    path: `${__dirname}/output-stream.txt`,
    contents: fs.createReadStream(`${__dirname}/stream-contents.txt`)
  })

  write(file, function (err) {
    if (err) return t.end(err)
    fs.stat(`${__dirname}/output-stream.txt`, function (err, stat) {
      t.false(err, 'did not error')
      t.true(stat.isFile(), 'created in correct location')
      t.end(err)
    })
  })
})

test('files nested in non-existent directories', function (t) {
  t.plan(2)

  var file = new Vinyl({
    path: `${__dirname}/output/output.txt`,
    contents: new Buffer('Hello world')
  })

  write(file, function (err) {
    if (err) return t.end(err)
    fs.stat(`${__dirname}/output/output.txt`, function (err, stat) {
      t.false(err, 'did not error')
      t.true(stat.isFile(), 'created in correct location')
      t.end(err)
    })
  })
})
