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
      [ 'foo.txt  bar.txt  baz.txt  qux.txt'
      , 'foo.md   bar.md   baz.md   qux.md'
      , 'foo.js   bar.js   baz.js   qux.js'
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
