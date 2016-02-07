'use strict'

// import
//----------------------------------------------------------
const merge = require('lodash.merge')
const freeze = require('deep-freeze')
const Columns = require('./lib/columns')

// jsdoc
function columnizeArray(array, opts) {

  // conditionally sort array
  //----------------------------------------------------------
  const ar =
    opts && typeof opts.sort !== 'undefined'
      ? opts.sort
        ? opts.sort(array)
        : array
      : array.sort()

  // build and freeze props
  //----------------------------------------------------------
  const props = freeze(merge(
    { gap:
      { len: 2
      , ch: ' '
      }
    , maxRowLen: 80
    }
  , opts
  , { ar
    , arLen: ar.length
    , initState:
      { i: 0
      , strs: []
      , indices: []
      , widths: []
      }
    }
  ))

  // columnize and return
  //----------------------------------------------------------
  const columns = new Columns(props)
  return { strs: columns.state.strs
         , indices: columns.state.indices
         }
}

// export
//----------------------------------------------------------
module.exports = columnizeArray
