'use strict'

describe 'sort :', ->
  ar = ['foo', 'bar', 'baz']

  describe 'false :', ->

    res = -> columnize ar, sort: false

    it 'strs', ->
      expected = [ 'foo  bar  baz' ]
      actual = res().strs
      assert.deepEqual actual, expected

    it 'indices', ->
      expected = [ [ 0, 1, 2] ]
      actual = res().indices
      assert.deepEqual actual, expected

  describe 'true :', ->

    res = -> columnize ar, sort: true

    it 'strs', ->
      expected = [ 'bar  baz  foo' ]
      actual = res().strs
      assert.deepEqual actual, expected

    it 'indices', ->
      expected = [ [ 0, 1, 2] ]
      actual = res().indices
      assert.deepEqual actual, expected
