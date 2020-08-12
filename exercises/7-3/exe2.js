const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//deepEqual ==
//deepStrictEqual ===
assert.strictEqual(typeof myRemove, 'function');

//a
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Should be [1, 2, 4]');

//b
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Should\'t be [1, 2, 3, 4]');

//c
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Should be equal');

const myList = ['a', 'b', 'c'];
assert.deepStrictEqual(myList, ['a', 'b', 'c'], 'Should be the same');
assert.notDeepStrictEqual(myRemove(myList, 'a'), ['a', 'b', 'c'], "Shouldn\'t be the same");

//d
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Should be the same');