var assert = require('node:assert')
var { describe, test } = require('node:test')

var pojo = require('../../index.js')

describe('set', function () {
  test('basic', function () {
    var data = {}
    var result = pojo.set(data, 'hello', 'bye')
    assert.equal(data.hello, 'bye')
    assert.equal(result.hello, 'bye')
  })
})
