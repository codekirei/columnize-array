'use strict'

// import
//----------------------------------------------------------
const merge = require('lodash.merge')

// jsdoc
function bindState(rows) {

  // build state from rows and immutable initState
  //----------------------------------------------------------
  this.state = merge(
    {}
    , this.props.initState
    , {rows}
  )

  // fill state arrays with init vals
  //----------------------------------------------------------
  function initVals(map, ct) { while (ct--) map.forEach((v, k) => k.push(v())) }

  const cols = Math.ceil(this.props.arLen, rows)
  const colMap = new Map()
  colMap.set(this.state.widths, () => 0)
  initVals(colMap, cols)

  const rowMap = new Map()
  rowMap.set(this.state.indices, () => [])
  rowMap.set(this.state.strs, () => '')
  initVals(rowMap, rows)
}

// export
//----------------------------------------------------------
module.exports = bindState
