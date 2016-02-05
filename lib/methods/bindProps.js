'use strict'

// import
//----------------------------------------------------------
const freeze = require('deep-freeze')

// jsdoc
function bindProps(ar, conf) {
  this.props = freeze(
    Object.assign(
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
    )
  )
}

// export
//----------------------------------------------------------
module.exports = bindProps
