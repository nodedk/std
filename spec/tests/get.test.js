var assert = require('node:assert')
var { describe, test } = require('node:test')

var pojo = require('../../index.js')

describe('get', function () {
  test('basic', function ({ t }) {
    var data = { hello: 'bye' }
    var result = pojo.get(data, 'hello')
    assert.equal(result, 'bye')
  })
})
