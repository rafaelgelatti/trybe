let array1 = ['a', 'b', 'c'];
let array2 = ['x', 'y', 'z'];

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
console.log(myConcat(array1, array2));