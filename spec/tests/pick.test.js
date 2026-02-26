var assert = require('node:assert')
var { describe, test } = require('node:test')

var std = require('../../index.js')

describe('pick', function () {
  test('basic', function () {
    var data = { hello: 'bye' }
    var result = std.pick(data, 'hello')
    assert.equal(result.hello, 'bye')
  })
})
