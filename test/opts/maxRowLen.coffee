'use strict'

describe 'maxRowLen :', ->
  names = ['foo', 'bar', 'baz', 'qux']
  exts = ['txt', 'md', 'js']
  ar = []

  names.forEach (name) ->
    exts.forEach (ext) ->
      ar.push name + '.' + ext

  len = 40
  res = -> columnize ar, maxRowLen: len

  it 'strs', ->
    expected =
      [ 'bar.js   baz.js   foo.js   qux.js'
      , 'bar.md   baz.md   foo.md   qux.md'
      , 'bar.txt  baz.txt  foo.txt  qux.txt'
      ]
    actual = res().strs
    assert.deepEqual actual, expected
    expected.map (str) ->
      assert.isTrue str.length <= len

  it 'indices', ->
    expected =
      [ [ 0, 3, 6, 9 ]
      , [ 1, 4, 7, 10 ]
      , [ 2, 5, 8, 11 ]
      ]
    actual = res().indices
    assert.deepEqual actual, expected
