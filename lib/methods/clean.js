'use strict'

// import
//----------------------------------------------------------
const merge = require('lodash.merge')

// jsdoc
function clean() {
  const rows = this.state.rows || 0
  this.state = merge({}, this.props.initState)
  this.state.rows = rows + 1
  this.fill(this.colsMap(), this.cols(this.state.rows))
  this.fill(this.rowsMap(), this.state.rows)
}

// export
//----------------------------------------------------------
module.exports = clean
