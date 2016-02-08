'use strict'

describe 'two rows :', ->
  names = ['foo', 'bar', 'baz', 'qux']
  exts = ['txt', 'md', 'js']
  ar = []

  names.forEach (name) ->
    exts.forEach (ext) ->
      ar.push name + '.' + ext

  res = -> columnize ar

  it 'strs', ->
    expected =
      [ 'foo.txt  foo.js   bar.md  baz.txt  baz.js   qux.md'
      , 'foo.md   bar.txt  bar.js  baz.md   qux.txt  qux.js'
      ]
    actual = res().strs
    assert.deepEqual actual, expected

  it 'indices', ->
    expected =
      [ [ 0, 2, 4, 6, 8, 10 ]
      , [ 1, 3, 5, 7, 9, 11 ]
      ]
    actual = res().indices
    assert.deepEqual actual, expected
