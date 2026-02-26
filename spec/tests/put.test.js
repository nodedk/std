var assert = require('node:assert')
var { describe, test } = require('node:test')

var std = require('../../index.js')

describe('put', function () {
  test('basic', function () {
    var data = {}
    var result = std.put(data, 'hello', 'bye')
    assert.equal(data.hello, undefined)
    assert.equal(result.hello, 'bye')
  })
})
