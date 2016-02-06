'use strict'

// import
//----------------------------------------------------------
const merge = require('lodash.merge')
const freeze = require('deep-freeze')
const Columns = require('./lib/columns')

// jsdoc
function columnizeArray(ar, opts) {
  const props = freeze(merge(
    { gap:
      { len: 2
      , ch: ' '
      }
    , maxRowLen: 80
    }
  , opts
  , { ar: opts && opts.sort === false ? ar : ar.sort()
    , arLen: ar.length
    , initState:
      { i: 0
      , strs: []
      , indices: []
      , widths: []
      }
    }
  ))

  const columns = new Columns(props)
  return { strs: columns.state.strs
         , indices: columns.state.indices
         }
}

// export
//----------------------------------------------------------
module.exports = columnizeArray
