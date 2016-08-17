module.exports = function filter (arr, callback, thisArg) {
  return arr.reduce(function (memory, item, index) {
    return memory.then(function (result) {
      return callback.call(thisArg, item, index, arr).then(function (keep) {
        if (keep) {
          result.push(item)
        }

        return result
      })
    })
  }, Promise.resolve([]))
}
