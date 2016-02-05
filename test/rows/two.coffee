'use strict'

describe.only 'two rows', ->
  names =
    [ 'foo'
    , 'bar'
    , 'baz'
    , 'qux'
    ]

  exts =
    [ 'txt'
    , 'md'
    , 'js'
    ]

  ar = []

  names.forEach (name) ->
    exts.forEach (ext) ->
      ar.push name + '.' + ext

  it 'strs', ->
    expected =
      [ 'bar  baz  foo  qux'
      ]
    actual = columnize(ar).strs
    assert.deepEqual actual, expected

  it.skip 'indices'
