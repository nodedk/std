var assert = require('node:assert')
var { describe, test } = require('node:test')

var pojo = require('../../index.js')

describe('pick', function () {
  test('basic', function () {
    var data = { hello: 'bye' }
    var result = pojo.pick(data, 'hello')
    assert.equal(result.hello, 'bye')
  })
})
