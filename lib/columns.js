'use strict'

/**
  Constructor with columnization logic.

  @param {Object} props - immutable properties that dictate columnization
  @returns {Object} instance of self
 */
function Columns(props) {

  // require and bind methods
  //----------------------------------------------------------
  [ 'bindState'
  , 'solve'
  ].forEach(method =>
    this.constructor.prototype[method] = require(`./methods/${method}`)
  )

  // bind props (immutable) and state (mutable)
  //----------------------------------------------------------
  this.props = props
  this.bindState(1)

  // find solution state
  //----------------------------------------------------------
  this.solve()
}

// export
//----------------------------------------------------------
module.exports = Columns
