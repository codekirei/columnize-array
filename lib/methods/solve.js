'use strict'

/**
  Iteratively solves columnization given constraints in props.
  Solution is captured by this.state.

  @returns {undefined}
 */
function solve() {
  while (true) {

    // establish vars for current loop
    //----------------------------------------------------------
    const row = this.state.i % this.state.rows
    const col = Math.floor(this.state.i / this.state.rows)
    const str = this.props.ar[this.state.i]
    const len = str.length
    const tooLong = len > this.props.maxRowLen

    // str is too long ? set rows to maximum
    //----------------------------------------------------------
    if (tooLong && this.state.rows !== this.props.arLen) {
      this.bindState(this.props.arLen)
      continue
    }

    // at new col ? indent previous col
    //----------------------------------------------------------
    if (row === 0 && this.state.i !== 0) {
      const prevCol = col - 1
      const reqLen = this.state.widths[prevCol] + this.props.gap.len
      this.state.indices.forEach((ar, i) => {
        const prevLen = this.props.ar[ar[prevCol]].length
        const diff = reqLen - prevLen
        this.state.strs[i] += this.props.gap.ch.repeat(diff)
      })
    }

    // add str to row
    //----------------------------------------------------------
    this.state.strs[row] += str

    // row not too long ? update state : reset state with rows + 1
    //----------------------------------------------------------
    if (
      this.state.strs[row].length <= this.props.maxRowLen ||
      tooLong
    ) {
      if (len > this.state.widths[col]) this.state.widths[col] = len
      this.state.indices[row].push(this.state.i)
      this.state.i++
    }
    else this.bindState(this.state.rows + 1)

    // solution reached ? exit loop
    //----------------------------------------------------------
    if (this.state.i === this.props.arLen) break
  }
}

// export
//----------------------------------------------------------
module.exports = solve
