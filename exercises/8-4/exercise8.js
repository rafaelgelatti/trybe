const assert = require('assert')

// Caso não seja passado parametro, ele assume o default
function greet(name = 'Skywalker', greeting = 'Hi') {
  return `${greeting} ${name}`;
}

console.log(greet(undefined, 'Greetings Master'));

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")

const wtf = (a = 'pull', b = 'pull') => `I tried to open a ${a} request, but it endend up being a ${b} request.... ba dum tsssss..... CLAP! CLAP! CLAP!`;

console.log(wtf('pull', null));