'use strict'

//jsdoc
function Columns(ar, conf) {

  // require and bind methods
  //----------------------------------------------------------
  [ 'bindProps'
  , 'bindState'
  , 'solve'
  ].forEach(method =>
    this.constructor.prototype[method] = require(`./methods/${method}`)
  )

  // bind props (immutable) and state (mutable)
  //----------------------------------------------------------
  this.bindProps(ar, conf)
  this.bindState(1)

  // find solution
  //----------------------------------------------------------
  this.solve()
}

// export
//----------------------------------------------------------
module.exports = Columns
