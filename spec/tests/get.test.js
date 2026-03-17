var assert = require('node:assert')
var { test, describe } = require('node:test')

var struct = require('../../index.js')

describe('get', function () {
  test('basic', function ({ t }) {
    var data = { hello: 'bye' }
    var result = struct.get(data, 'hello')
    assert.equal(result, 'bye')
  })
})
