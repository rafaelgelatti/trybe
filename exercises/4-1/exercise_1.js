const a = 54;
const b = 19;

//SUM
console.log(a + " + " + b + " = " + (a + b));

//SUB
console.log(a + " - " + b + " = " + (a - b));

//MULT
console.log(a + " * " + b + " = " + (a * b));

//DIV
console.log(a + " / " + b + " = " + (a / b));

//MOD
console.log(a + " % " + b + " = " + (a % b));

// revisiting 18/08/2020
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

console.log(`Result of ${a} + ${b} = ${sum(a, b)}`);
console.log(`Result of ${a} - ${b} = ${sub(a, b)}`);
console.log(`Result of ${a} * ${b} = ${mult(a, b)}`);
console.log(`Result of ${a} / ${b} = ${div(a, b)}`);

// two decimals
console.log(`Result of ${a} / ${b} = ${(div(a, b)).toFixed(2)} // two decimals`);

// round down
console.log(`Result of ${a} / ${b} = ${Math.floor(div(a, b))} // round floor`);

// round
console.log(`Result of ${a} / ${b} = ${Math.round(div(a, b))} // round`);

console.log(`Result of ${a} % ${b} = ${mod(a, b)}`);