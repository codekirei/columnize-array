'use strict'

// jsdoc
function fill(map, ct) {
  while (ct--) map.forEach((v, k) => k.push(v()))
}

// export
//----------------------------------------------------------
module.exports = fill
