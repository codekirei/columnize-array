'use strict'

// import
//----------------------------------------------------------
const merge = require('lodash.merge')
const freeze = require('deep-freeze')

// jsdoc
function columnizeArray(ar, userConf) {

  // merge defaults and userConf into conf
  //----------------------------------------------------------
  const conf = freeze(merge(
    { gapChar: ' '
    , maxRowLen: 80
    , minGap: 2
    , sort: true
    }
    , userConf
  ))

  // generate props
  //----------------------------------------------------------
  const props = freeze(
    { maxRowLen: conf.maxRowLen
    , gap: conf.gapChar.repeat(conf.minGap)
    , ar: conf.sort ? ar.sort() : ar
    , arLen: ar.length
    })

  // loop to build arrays of strs and indices
  //----------------------------------------------------------
  let rowCt = 1
  let i, strs, indices

  function reset() {
    i = 0
    strs = []
    indices = []
  }

  reset()

  while (rowCt) {
    const row = i % rowCt

    typeof strs[row] === 'undefined'
      ? strs[row] = props.ar[i]
      : strs[row] += props.gap + props.ar[i]

    if (strs[row].length <= props.maxRowLen) {
      typeof indices[row] === 'undefined'
        ? indices[row] = [i]
        : indices[row].push(i)
      i++
    } else {
      rowCt++
      reset()
    }

    if (i === props.arLen) rowCt = 0
  }

  // return generated arrays
  //----------------------------------------------------------
  return {strs, indices}
}

// export
//----------------------------------------------------------
module.exports = columnizeArray
