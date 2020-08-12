const assert = require('assert');
function wordLengths(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArray.push(arr[i].length);
  }

  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);