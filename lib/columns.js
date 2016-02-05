'use strict'

//jsdoc
function Columns(ar, conf) {
  // attach methods
  this.attach(
    [ 'bindProps'
    , 'clean'
    , 'cols'
    , 'colsMap'
    , 'fill'
    , 'rowsMap'
    , 'solve'
    ]
  )

  // bind props (immutable) and state (mutable)
  this.bindProps(ar, conf)
  this.state = {}
  this.clean() // TODO: split out rows increment from clean fn

  // find solution state
  this.solve()
}

// jsdoc
Columns.prototype.attach = function(methods, path) {
  path = path || './methods/'
  methods.forEach(method =>
    Columns.prototype[method] = require(path + method)) // TODO -> this.constructor?
}

// export
//----------------------------------------------------------
module.exports = Columns
