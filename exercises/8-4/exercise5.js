const assert = require('assert')

const myList = [1, 2, 3]

// aqui eu sei que o array vai ser de 3 valores, então não tem segredo
const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)