const myFizzBuzz = require('./myFizzBuzz');

describe('FizzBuzz', () => {
  it('gets the correct return', () => {
    expect(myFizzBuzz(15)).toMatch(/fizzbuzz/);
    expect(myFizzBuzz(9)).toMatch(/fizz/);
    expect(myFizzBuzz(20)).toMatch(/buzz/);
    expect(myFizzBuzz(14)).toBe(14);
    expect(myFizzBuzz('15')).toBeFalsy();
  });
});
