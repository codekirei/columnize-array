'use strict'

describe 'gap :', ->
  ar = ['foo', 'bar', 'baz']

  describe 'len :', ->
    res = -> columnize ar, gap: len: 1

    it 'strs', ->
      expected = ['foo bar baz']
      actual = res().strs
      assert.deepEqual actual, expected

    it 'indices', ->
      expected = [ [ 0, 1, 2] ]
      actual = res().indices
      assert.deepEqual actual, expected

  describe 'ch :', ->
    res = -> columnize ar, gap: ch: '.'

    it 'strs', ->
      expected = [ 'foo..bar..baz' ]
      actual = res().strs
      assert.deepEqual actual, expected

    it 'indices', ->
      expected = [ [ 0, 1, 2] ]
      actual = res().indices
      assert.deepEqual actual, expected
