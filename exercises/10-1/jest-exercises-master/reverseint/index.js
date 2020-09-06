// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // learned how to do it here:
  // https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
  // - pass to string
  // - split
  // - reverse
  // - join
  // - pass to float(or number)
  // - multiply by the sign(in case it's a negative number)
  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;
