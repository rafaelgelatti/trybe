// reduce exercises
// 1
function total(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(total([1,2,3])); // 6

// 2
function stringConcat(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, '');
}

console.log(stringConcat([1,2,3])); // "123"

// 3
function totalVotes(arr) {
  return arr.reduce((acc, currentValue) => {
    // SAME AS if (currentValue.voted === true) { return acc += 1 };
    if (currentValue.voted === true) acc += 1;
    return acc;
  }, 0);
}

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

// 4
function shoppingSpree(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue.price, 0);   
}

var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5
function flatten(arr) {
  return arr.reduce((acc, element) => acc.concat(element), []);  
}

var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6
var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
  return arr.reduce((acc, element) => {
    if (element.age < 26 && element.voted) acc.numYoungVotes += 1;
    if (element.age < 26) acc.numYoungPeople += 1;
    if (element.age >= 26 && element.age < 36 && element.voted) acc.numMidVotes += 1;
    if (element.age >= 26 && element.age < 36) acc.numMidPeople += 1;
    if (element.age >= 36 && element.age < 56 && element.voted) acc.numOldVotes += 1;
    if (element.age >= 36 && element.age < 56) acc.numOldPeople += 1;
    return acc;
  }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0});
}

console.log(voterResults(voters));
