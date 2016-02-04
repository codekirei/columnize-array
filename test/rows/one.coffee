'use strict'

it 'one row', ->
  strs =
    [ 'foo'
    , 'bar'
    , 'baz'
    , 'qux'
    ]
  expected = 'bar  baz  foo  qux'
  actual = columnize(strs)
  assert.equal actual, expected
