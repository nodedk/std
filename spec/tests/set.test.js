var assert = require('node:assert')
var { test, describe } = require('node:test')

var struct = require('../../index.js')

describe('set', function () {
  test('basic', function () {
    var data = {}
    var result = struct.set(data, 'hello', 'bye')
    assert.equal(data.hello, 'bye')
    assert.equal(result.hello, 'bye')
  })
})
