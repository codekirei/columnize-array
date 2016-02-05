'use strict'

describe 'minGap', ->
  ar = ['foo', 'bar', 'baz']

  res = -> columnize ar, minGap: 1

  it 'strs', ->
    expected = [ 'bar baz foo' ]
    actual = res().strs
    assert.deepEqual actual, expected

  it 'indices', ->
    expected = [ [ 0, 1, 2] ]
    actual = res().indices
    assert.deepEqual actual, expected
