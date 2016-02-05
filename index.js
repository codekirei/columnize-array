'use strict'

// import
//----------------------------------------------------------
const merge = require('lodash.merge')
const freeze = require('deep-freeze')
// const Columns = require('./lib/columns')

// jsdoc
function columnizeArray(ar, userConf) {
  const conf = freeze(merge(
    { gap:
      { len: 2
      , ch: ' '
      }
    , maxRowLen: 80
    , sort: true
    }
  , userConf
  ))

  const columns = new Columns(ar, conf)

  return {
    strs: columns.state.strs
    , indices: columns.state.indices
  }
}

function Columns(ar, conf) {
  this.props = freeze(merge(
    {}
  , conf
  , { ar: conf.sort ? ar.sort() : ar
    , arLen: ar.length
    , initState:
      { i: 0
      , strs: []
      , indices: []
      , widths: []
      }
    }
  ))

  this.state = {}
  this.cleanState()

  this.solve()
}

Columns.prototype.colsMap = function() {
  return new Map(
    [ [ this.state.widths, () => 0 ]
    ])
}

Columns.prototype.rowsMap = function() {
  return new Map(
    [ [ this.state.indices, () => [] ]
    , [ this.state.strs, () => '' ]
    ])
}

Columns.prototype.cols = function(rows) {
  return Math.ceil(this.props.arLen / rows)
}

Columns.prototype.fill = function(map, ct) {
  while (ct--) map.forEach((v, k) => k.push(v()))
}

Columns.prototype.cleanState = function() {
  const rows = this.state.rows || 0
  this.state = merge({}, this.props.initState)
  this.state.rows = rows + 1
  this.fill(this.colsMap(), this.cols(this.state.rows))
  this.fill(this.rowsMap(), this.state.rows)
}

Columns.prototype.solve = function() {
  while (true) {
    const row = this.state.i % this.state.rows
    const col = Math.floor(this.state.i / this.state.rows)
    const str = this.props.ar[this.state.i]
    const len = str.length

    if (row === 0 && this.state.i !== 0) {
      const prevCol = col - 1
      const reqLen = this.state.widths[prevCol] + this.props.gap.len
      this.state.indices.forEach((ar, _i) => {
        const diff = reqLen - this.props.ar[ar[prevCol]].length
        this.state.strs[_i] += this.props.gap.ch.repeat(diff)
      })
    }

    this.state.strs[row] += str

    if (this.state.strs[row].length <= this.props.maxRowLen) {
      if (len > this.state.widths[col]) this.state.widths[col] = len
      this.state.indices[row].push(this.state.i)
      this.state.i++
    } else this.cleanState()

    if (this.state.i === this.props.arLen) break
  }
}

// export
//----------------------------------------------------------
module.exports = columnizeArray
