'use strict'

// import
//----------------------------------------------------------
const merge = require('lodash.merge')
const freeze = require('deep-freeze')
const Columns = require('./lib/columns')

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
  return { strs: columns.state.strs
         , indices: columns.state.indices
         }
}

// export
//----------------------------------------------------------
module.exports = columnizeArray
