'use strict'

// jsdoc
function rowsMap() {
  return new Map(
    [ [ this.state.indices, () => [] ]
    , [ this.state.strs, () => '' ]
    ])
}

// export
//----------------------------------------------------------
module.exports = rowsMap
