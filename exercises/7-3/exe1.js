const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// equal ==
// strictEqual ===

//testa se 'sum' é do tipo função
assert.strictEqual(typeof sum, 'function');

//a
assert.strictEqual(sum(4,5), 9, '4 + 5 = 9');

//b
assert.strictEqual(sum(0,0), 0, '0 + 0 = 0');

//c
assert.throws(() => { sum(4, '5'); });

//d
assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/);