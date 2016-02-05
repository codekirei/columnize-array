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
    { ar: conf.sort ? ar.sort() : ar
    , arLen: ar.length
    })

  // loop to build arrays of strs and indices
  //----------------------------------------------------------
  let rows = 1
  let i, strs, indices, widths, cols

  function fillRows(rowCt) {
    while (rowCt--) {
      indices.push([])
      strs.push('')
    }
  }

  function fillCols(colCt) {
    while (colCt--) widths.push(0)
  }

  function reset() {
    i = 0
    cols = Math.ceil(props.arLen / rows)
    indices = []
    strs = []
    widths = []
    fillRows(rows)
    fillCols(cols)
  }

  reset()

  while (true) {
    const row = i % rows
    const col = Math.floor(i / rows)
    const str = props.ar[i]
    const len = str.length

    if (row === 0 && i !== 0) {
      const prevCol = col - 1
      const reqLen = widths[prevCol] + conf.minGap
      indices.forEach((indexAr, _i) => {
        const diff = reqLen - props.ar[indexAr[prevCol]].length
        strs[_i] += conf.gapChar.repeat(diff)
      })
    }

    strs[row] += str

    function goOn() {
      if (len > widths[col]) widths[col] = len
      indices[row].push(i)
      i++
    }

    function bail() {
      rows++
      reset()
    }

    strs[row].length <= conf.maxRowLen
      ? goOn()
      : bail()

    if (i === props.arLen) break
  }

  // return generated arrays
  //----------------------------------------------------------
  return {strs, indices}
}

// export
//----------------------------------------------------------
module.exports = columnizeArray
