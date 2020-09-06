// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  let arr = [n];
  while (n > 1) {
    arr.push(n - 1);
    n -= 1;
  }
  arr.reverse()
  .forEach((item) => {
    if (item % 5 === 0 && item % 3 === 0) {
      console.log('fizzbuzz');
    } else if (item % 5 === 0) {
      console.log('buzz');
    } else if (item % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(item);
    }
  });
}

module.exports = fizzBuzz;
