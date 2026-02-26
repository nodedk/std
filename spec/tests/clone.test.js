var assert = require('node:assert')
var { describe, test } = require('node:test')

var std = require('../../index.js')

describe('clone', function () {
  test('basic', function () {
    var data = { hello: 'bye' }
    var result = std.clone(data)
    assert.equal(result.hello, 'bye')
  })
})
