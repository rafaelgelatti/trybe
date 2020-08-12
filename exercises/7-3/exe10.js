const greetPeople = (people) => {
  let greeting = 'Hello ';
  let output = [];

  for (const person in people) {
    greeting = `Hello ${people[person]}`;
    output.push(greeting);
  }
  return output;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');
assert.deepStrictEqual(greetPeople(parameter), result);