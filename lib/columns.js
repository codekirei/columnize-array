'use strict'

//jsdoc
function Columns(ar, conf) {

  // require and bind methods
  //----------------------------------------------------------
  [ 'bindProps'
  , 'clean'
  , 'cols'
  , 'colsMap'
  , 'fill'
  , 'rowsMap'
  , 'solve'
  ].forEach(method =>
    this.constructor.prototype[method] = require(`./methods/${method}`)
  )

  // bind props (immutable) and state (mutable)
  //----------------------------------------------------------
  this.bindProps(ar, conf)
  this.state = {}
  this.clean() // TODO: split out rows increment from clean fn

  // find solution
  //----------------------------------------------------------
  this.solve()
}

// export
//----------------------------------------------------------
module.exports = Columns
