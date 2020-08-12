const assert = require('assert');

function addOne(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArray.push(arr[i] + 1);
  }

  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);