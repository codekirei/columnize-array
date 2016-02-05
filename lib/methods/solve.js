'use strict'

// jsdoc
function solve() {
  while (true) {
    // establish vars for current loop
    //----------------------------------------------------------
    const row = this.state.i % this.state.rows
    const col = Math.floor(this.state.i / this.state.rows)
    const str = this.props.ar[this.state.i]
    const len = str.length

    // at new col ? indent previous col
    //----------------------------------------------------------
    if (row === 0 && this.state.i !== 0) {
      const prevCol = col - 1
      const reqLen = this.state.widths[prevCol] + this.props.gap.len
      this.state.indices.forEach((ar, i) => {
        const diff = reqLen - this.props.ar[ar[prevCol]].length
        this.state.strs[i] += this.props.gap.ch.repeat(diff)
      })
    }

    // add str to row
    //----------------------------------------------------------
    this.state.strs[row] += str

    // row not too long ? update and loop : rows++ and reset state
    //----------------------------------------------------------
    const carryOn = () => {
      if (len > this.state.widths[col]) this.state.widths[col] = len
      this.state.indices[row].push(this.state.i)
      this.state.i++
    }
    this.state.strs[row].length <= this.props.maxRowLen
      ? carryOn()
      : this.clean()

    // solution reached -> exit loop
    //----------------------------------------------------------
    if (this.state.i === this.props.arLen) break
  }
}

// export
//----------------------------------------------------------
module.exports = solve
