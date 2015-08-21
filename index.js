'use strict'

const assert = require('assert')

module.exports = function assertNaN(value, message) {
  return assert.ok(value !== value, message)
}
