'use strict'

const test = require('tap').test
const assert = require('assert')
const assertNaN = require('../')

test('should throw if !isNaN', function(t) {
  t.throws(function() {
    assertNaN(1)
  }, assert.AssertionError)
  t.end()
})

test('should not throw if isNaN', function(t) {
  t.doesNotThrow(function() {
    assertNaN(NaN)
  })
  t.end()
})
