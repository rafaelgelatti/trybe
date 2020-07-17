// 1- Get the value "Volvo" from the cars array.

var cars = ["BMW", "Batmobile", "Herbie", "Car", "Volvo"];

console.log(cars[4]);

// 2- Change the first item of cars to "Ford".

cars[0] = "Ford";

console.log(cars);

// 3- Alert the number of items in an array, using the correct Array property.

console.log("Number of items in the array: " + cars.length);

// 4- Create a loop that runs from 0 to 9.

for(let i = 0; i <= 9; i += 1) {
    console.log("Number " + i);
}

// 5- Create a loop that runs through each item in the fruits array.

let fruits = ['apple', 'banana', 'orange', ['lemon', 'pineapple']];

for(fruit in fruits) {
    console.log(fruits[fruit]);
}

console.log(fruits[3][1]);