'use strict'

describe 'sort === false :', ->
  ar = ['foo', 'bar', 'baz']

  res = -> columnize ar, sort: false

  it 'strs', ->
    expected = [ 'foo  bar  baz' ]
    actual = res().strs
    assert.deepEqual actual, expected

  it 'indices', ->
    expected = [ [ 0, 1, 2] ]
    actual = res().indices
    assert.deepEqual actual, expected
