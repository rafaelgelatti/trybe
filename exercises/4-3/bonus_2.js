function isPrime(n) {
  let input = n;
  if (input < 0) input *= (-1);
  if (input <= 1) return `${input * Math.sign(n)} is NOT a prime number.`;
  for (let index = (input - 1); index > 1; index -= 1) {
    if (input % index === 0) return `${input * Math.sign(n)} is NOT a prime number.`;
  }
  return `${input * Math.sign(n)} IS a prime number.`;
}

console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(67));
console.log(isPrime(83));
console.log(isPrime(3));
console.log(isPrime(-5));
console.log(isPrime(-10));