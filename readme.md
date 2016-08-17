# Serial filter

Serial asynchronous version of Array#filter, with promised based interface.

## Installation

```sh
npm install --save serial-filter
```

## Usage

```js
const got = require('got')
const filter = require('serial-filter')

filter([1, 2, 3, 4], n => {
  return got(`http://is-number-even.com/${n}`, { json: true }).then(res => res.body)
}).then(result => {
  console.log(result)
  //=> 2, 4
})
```

## API

### filter(arr, callback[, thisArg])

Returns a promise of a new array with all elements that pass the asynchronous
test implemented by the provided function.

- **arr** <br>
  Array that will be filtered.

- **callback** <br>
  Function to test each element of the array. Invoked with `(element, index, array)`. Return a promise that resolves to `true` to keep the element, `false` otherwise.

- **thisArg** <br>
  Optional. Value to use as `this` when executing `callback`.

If any promise provided by the `callback` rejects, the promise returned will
immediately reject with that rejection.

## See also

- [parallel-filter](https://github.com/LinusU/parallel-filter) - Parallel asynchronous version of Array#filter, with promised based interface
