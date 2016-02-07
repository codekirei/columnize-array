'use strict'

path = require 'path'

describe 'sort :', ->

  describe 'false :', ->

    ar = ['foo', 'bar', 'baz']
    res = -> columnize ar, sort: false

    it 'strs', ->
      expected = [ 'foo  bar  baz' ]
      actual = res().strs
      assert.deepEqual actual, expected

    it 'indices', ->
      expected = [ [ 0, 1, 2 ] ]
      actual = res().indices
      assert.deepEqual actual, expected

  describe 'fn :', ->

    ar = ['foo.md', 'foo.txt', 'bar.md', 'bar.txt', 'baz.js']
    sort = (ar) ->
      ar.sort().sort (a, b) ->
        path.extname(a) > path.extname(b)
    res = -> columnize ar, sort: sort

    it 'strs', ->
      expected = [ 'baz.js  bar.md  foo.md  bar.txt  foo.txt' ]
      actual = res().strs
      assert.deepEqual actual, expected

    it 'indices', ->
      expected = [ [ 0, 1, 2, 3, 4 ] ]
      actual = res().indices
      assert.deepEqual actual, expected
