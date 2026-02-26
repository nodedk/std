var set = require('lodash.set')
var get = require('lodash.get')
var pick = require('lodash.pick')
var omit = require('lodash.omit')
var clone = require('lodash.clonedeep')

module.exports = {
  get,
  set,
  pick,
  omit,
  clone,
  put: function (data, ...args) {
    return set(clone(data), ...args)
  }
}
