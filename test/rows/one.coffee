'use strict'

describe 'one row', ->
  ar =
    [ 'foo'
    , 'bar'
    , 'baz'
    , 'qux'
    ]

  it 'strs', ->
    expected = 'bar  baz  foo  qux'
    actual = columnize(ar).strs
    assert.equal actual, expected

  it.skip 'indices'
