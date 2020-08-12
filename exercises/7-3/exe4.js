const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//a
assert.strictEqual(myFizzBuzz(60), 'fizzbuzz');

//b
assert.strictEqual(myFizzBuzz(12), 'fizz');

//c
assert.strictEqual(myFizzBuzz(20), 'buzz');

//d
assert.strictEqual(myFizzBuzz(19), 19);

//e
assert.strictEqual(myFizzBuzz('15'), false);