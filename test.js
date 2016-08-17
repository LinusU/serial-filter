var filter = require('./')
var assert = require('assert')
var yesNoWords = require('yes-no-words')

var words = Array.from({ length: 64 }, yesNoWords.allRandom)
var thisArg = {}

var expected = words.filter(function (word) {
  return yesNoWords.yes.includes(word)
})

filter(words, function (word) {
  if (this !== thisArg) {
    return Promise.reject(new Error('thisArg was not forwarded as this'))
  } else {
    return Promise.resolve(yesNoWords.yes.includes(word))
  }
}, thisArg).then(function (actual) {
  assert.deepEqual(actual, expected)
}).catch(function (err) {
  console.error(err.stack)
  process.exitCode = 1
})
