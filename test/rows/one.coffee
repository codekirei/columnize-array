'use strict'

describe 'one row :', ->
  ar = ['foo', 'bar', 'baz', 'qux']
  res = -> columnize ar

  it 'strs', ->
    expected = ['bar  baz  foo  qux']
    actual = res().strs
    assert.deepEqual actual, expected

  it 'indices', ->
    expected = [ [0, 1, 2, 3] ]
    actual = res().indices
    assert.deepEqual actual, expected
