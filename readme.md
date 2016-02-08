# `columnize-array`

[![Build Status][1]][2]
[![Coverage Status][3]][4]

<b>[About](#about)</b> |
<b>[Installation](#installation)</b> |
<b>[API](#api)</b> |
<b>[License](#license)</b>

---

## About

A Node.js module to columnize an array of strings for printing to the terminal.

## Installation

Install and require as a standard Node module.

**Install**

```
  $ npm install --save columnize-array
```

**Require**

```js
  var columnize = require('columnize-array')
```

## API

### columnize(array, options)

- `array` &mdash; *Array* &mdash; strings to columnize
- `options` &mdash; *Object* &mdash; customizable options

```js
var defaultOptions =
  { gap:
    { len: 2
    , ch: ' '
    }
  , maxRowLen: 80
  , sort: false
  }
```

- `gap.len` &mdash; *Number* &mdash; minimum character width of gap between columns
- `gap.ch` &mdash; *String* &mdash; character to use in gap
- `maxRowLen` &mdash; *Number* &mdash; maximum character count of each row
- `sort` &mdash; *Boolean* or *Function* &mdash; whether to sort `array` param; `true` uses `Array.prototype.sort()`, or you can provide your own sort function `function(array) {/*sorting logic*/}`

## License

[MIT](https://github.com/codekirei/columnize-array/blob/master/license)

[1]: https://img.shields.io/travis/codekirei/columnize-array.svg?style=flat-square
[2]: https://travis-ci.org/codekirei/columnize-array
[3]: http://img.shields.io/coveralls/codekirei/columnize-array.svg?style=flat-square
[4]: https://coveralls.io/github/codekirei/columnize-array?branch=master
