'use strict'

// import
//----------------------------------------------------------
const merge = require('lodash.merge')

// jsdoc
function bindState(rows) {
  this.state = merge(
    {}
    , this.props.initState
    , {rows}
  )
  this.fill(this.colsMap(), this.cols(rows))
  this.fill(this.rowsMap(), rows)
}

// export
//----------------------------------------------------------
module.exports = bindState
