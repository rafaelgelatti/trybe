//1- Alert "John" by extracting information from the person object.

let person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person.firstName + ' ' + person.lastName);
console.log();

//2- Add the following property and value to the person object: country: Norway.

person = {
    firstName: "Tore",
    lastName: "Andre Flo",
    country: "Norway"
};

console.log(person.firstName + ' ' + person.lastName + ' from ' + person.country);
console.log();

//3- Create an object called person with name = John, age = 50.
//Then, access the object to alert("John is 50").

person = {
    firstName: "John",
    lastName: "Rambo",
    age: "56"
};

console.log(person.firstName + ' ' + person.lastName + ', ' + person.age + ' years old');
console.log();

//4- Create a loop that runs through each item in the fruits array.

var fruits = ["Apple", "Banana", "Orange"];

for (let fruit in fruits) {
    console.log(fruits[fruit]);
}
console.log();

//5- Create a loop that runs as long as i is less than 10.

let i = 0;

for (i; i < 10; i += 1) {
    console.log(i);
}
console.log();

//6- Imprimindo um objeto com for/in

let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  
  for (let i in car) {
    console.log(i, car[i]);
  }