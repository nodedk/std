var assert = require('node:assert')
var { describe, test } = require('node:test')

var pojo = require('../../index.js')

describe('omit', function () {
  test('basic', function () {
    var data = { hello: 'bye' }
    var result = pojo.omit(data, 'hello')
    assert.equal(data.hello, 'bye')
    assert.equal(result.hello, undefined)
  })
})
