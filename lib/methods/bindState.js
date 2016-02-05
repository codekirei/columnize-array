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
  const cols = Math.ceil(this.props.arLen, rows)

  const initVals = (ob, ct) => {
    while (ct--) Object.keys(ob).map(k =>
      this.state[k].push(ob[k]())
    )
  }

  initVals(
    { widths: () => 0 }
    , cols
  )

  initVals(
    { indices: () => []
    , strs: () => ''
    }
    , rows
  )
}

// export
//----------------------------------------------------------
module.exports = bindState
