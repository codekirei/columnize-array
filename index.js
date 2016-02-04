'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const merge = require('lodash.merge')
const freeze = require('deep-freeze')
const reqDir = require('require-directory')

// local
const lib = reqDir(module, './lib')

//----------------------------------------------------------
// logic
//----------------------------------------------------------

// jsdoc
function columnizeArray(ar, userConf) {
  // generate immutable props
  //----------------------------------------------------------
  const conf = merge(
    { maxRowLen: 80
    , minGap: 2
    , sort: true
    }
    , userConf
  )
  const props = freeze(
    { maxRowLen: conf.maxRowLen
    , gap: ' '.repeat(conf.minGap)
    , ar: conf.sort ? ar.sort() : ar
    })

  return props.ar.join(props.gap)
}

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = columnizeArray
