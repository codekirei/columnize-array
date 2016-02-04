'use strict'

it 'minGap', ->
  strs = ['foo', 'bar', 'baz']
  expected = 'bar baz foo'
  actual = columnize strs, minGap: 1
  assert.equal actual, expected
