var assert = require('node:assert')
var { test, describe } = require('node:test')

var struct = require('../../index.js')

describe('clone', function () {
  test('basic', function () {
    var data = { hello: 'bye' }
    var result = struct.clone(data)
    assert.equal(result.hello, 'bye')
  })
})
