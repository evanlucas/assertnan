# assertnan

[![Build Status](https://travis-ci.org/evanlucas/assertnan.svg)](https://travis-ci.org/evanlucas/assertnan)
[![Coverage Status](https://coveralls.io/repos/evanlucas/assertnan/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/assertnan?branch=master)

Assert that a value isNaN

## Install

```bash
$ npm install assertnan
```

## Test

```bash
$ npm test
```

## Usage

```js
const assertNaN = require('assertnan')
assertNaN(NaN)
// => does not throw
assertNaN(1)
// => throws
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
