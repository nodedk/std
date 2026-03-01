var assert = require('node:assert')
var { describe, test } = require('node:test')

var pojo = require('../../index.js')

describe('clone', function () {
  test('basic', function () {
    var data = { hello: 'bye' }
    var result = pojo.clone(data)
    assert.equal(result.hello, 'bye')
  })
})
