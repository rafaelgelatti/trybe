// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const input = str.toLowerCase();
  for (let index in input) {
    if (vowels.includes(input[index])) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

vowels('Hi There!');

module.exports = vowels;
