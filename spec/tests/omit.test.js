var assert = require('node:assert')
var { test, describe } = require('node:test')

var struct = require('../../index.js')

describe('omit', function () {
  test('basic', function () {
    var data = { hello: 'bye' }
    var result = struct.omit(data, 'hello')
    assert.equal(data.hello, 'bye')
    assert.equal(result.hello, undefined)
  })
})
