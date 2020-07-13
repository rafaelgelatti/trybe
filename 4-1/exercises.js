// 1- Create a variable called carName, assign the value Volvo to it.

const carName = "Batmobile";
console.log(carName);

// 2- Create a variable called x, assign the value 50 to it.

let x2 = 23;
console.log("let x2 = " + x2);

// 3- Display the sum of 5 + 10, using two variables: x and y.

let x3 = 4.5;
let y3 = 10.5;
let sum3 = x3 + y3;
console.log(x3 + " + " + y3 + " = " + sum3);

// 4- Create a variable called z, assign x + y to it, and display the result in an alert box.

const z = x3 + y3;
//alert(z);

// 5- On one single line, declare three variables with the following names and values:
// firstName = "John"
// lastName = "Doe"
// age = 35

var firstName = "John", lastName = "Rambo", age = 56;
console.log(firstName + " " + lastName + ", age " + age);

// 6- Use comments to describe the correct data type of the following variables:

var length = 16;          // number

var lastName = "Johnson"; // string

var x = {
  firstName: "John",
  lastName: "Doe"
};                        // object

// 7- Multiply 10 with 5, and alert the result:

console.log("10 * 5 = " + (10 * 5));

// 8- Divide 10 by 2, and alert the result:

console.log("10 / 2 = " + (10 / 2));

// 9 - Alert the remainder when 15 is divided by 9.

console.log("15 % 9 = " + (15 % 9));

// 10- Use the correct assignment operator that will result in x being 15 (same as x = x + y).

let x10 = 5;
let y10 = 10;
console.log(x10 + " + " + y10 + " = " + (x10 += y10));

// 11- Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let a = 10;
let b = 5;
console.log(a + " * " + b +" = " + (a *= b));

// 12- Choose the correct comparison operator to alert true, when x is greater than y.

let x12 = 12;
let y12 = 19;

console.log(x12 + " is greater than " + y12 + "? " + (x12 > y12));

// 13- Choose the correct comparison operator to alert true, when x is equal to y.

let x13 = 97;
let y13 = 97;

console.log(x13 + " is equal to " + y13 + "? " + (x13 === y13));

// 14- Choose the correct comparison operator to alert true, when x is NOT equal to y.

let x14 = 24;
let y14 = 23;

if (x14 !== y14) {
    console.log(x14 + " and " + y14 + " are NOT the same")
} else {
    console.log(x14 + " and " + y14 + " are the same")
}

// 15- Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age15 = 52;
let voteable = (age15 >= 18) ? true : false;
console.log("Is voteable? " + voteable);

// 16- Fix the if statement to alert "Hello World" if x is greater than y.

let x16 = 112;
let y16 = 59;

if (x16 > y16) {
    console.log("Hello World!")
} else {
    console.log("Error! " + y16 + " is greater than " + x16);
}

// 17- Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".

let x17 = 112;
let y17 = 455;

if (x17 > y17) {
    console.log("Hello World!")
} else {
    console.log("Error! " + y17 + " is greater than " + x17 + ". Goodbye!");
}

// 18- Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".

let fruits = "apple"

switch (fruits) {
    case "banana":
        console.log("Hello");
        break;
    case "apple":
        console.log("Welcome");
        break;
    default:
        console.log("Error");
}

// 19- Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".

let fruits19 = "orange"

switch (fruits19) {
    case "banana":
        console.log("Hello");
        break;
    case "apple":
        console.log("Welcome");
        break;
    default:
        console.log(fruits19 + " is neither apple nor banana");
}