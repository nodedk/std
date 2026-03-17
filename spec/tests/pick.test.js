var assert = require('node:assert')
var { test, describe } = require('node:test')

var struct = require('../../index.js')

describe('pick', function () {
  test('basic', function () {
    var data = { hello: 'bye' }
    var result = struct.pick(data, 'hello')
    assert.equal(result.hello, 'bye')
  })
})
