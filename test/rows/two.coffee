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
      [ 'bar.js  bar.txt  baz.md   foo.js  foo.txt  qux.md'
      , 'bar.md  baz.js   baz.txt  foo.md  qux.js   qux.txt'
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
