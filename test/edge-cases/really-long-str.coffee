'use strict'

describe 'really long str :', ->
  ar =
    [ 'foo'
    , 'bar'
    , 'baz'
    , 'qux'
    , 'foobarbazqux'.repeat(7) # 84 chs
    ]
  res = -> columnize ar

  it 'strs', ->
    expected = ar
    actual = res().strs
    assert.deepEqual actual, expected

  it 'indices', ->
    expected =
      [ [0]
      , [1]
      , [2]
      , [3]
      , [4]
      ]
    actual = res().indices
    assert.deepEqual actual, expected
