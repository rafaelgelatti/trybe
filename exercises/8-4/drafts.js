const person = {
    firstName: "João",
    lastName: "Jr II",
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian",
}

// const { nationality = 'Brazilian' } = person; ---NÃO ESTÁ FUNCIONANDO, ainda retorna 'undefined'
person.nationality = 'Brazilian';

const nation = ({ firstName, nationality }) => {
  return `${firstName} is ${nationality}`;
};

console.log(nation(otherPerson)); // Ivan is Russian
console.log(nation(person));

let array = [1, 2, 3, 4];

let newArr = [];
const myFunction = (arrayElement, currentIndex, array) => {
  arrayElement++;
  newArr.push(arrayElement);
}

array.forEach(myFunction);
console.log(newArr);

// reduce com tipos
// number

array = [1, 2, 3, 4];

let newItem = array.reduce((acc, curr, index) => acc + curr, 0);

console.log(newItem);

newItem = array.reduce((acc, curr) => acc + curr, 'a');

console.log(newItem);

// novos aprendizados com reduce

function fizzBuzzReducer(acc, element) {
  if (element % 15 === 0) return `${acc}Fizz Buzz\n`;
  if (element % 5 === 0) return `${acc}Fizz\n`;
  if (element % 3 === 0) return `${acc}Buzz\n`;
  return `${acc}${element}\n`;
}

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15
];

console.log(nums.reduce(fizzBuzzReducer, ''));

// arr to obj
const peopleArr  = [
  {
      username:    'glestrade',
      displayname: 'Inspector Lestrade',
      email:       'glestrade@met.police.uk',
      authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
      lastSeen:    '2019-05-13T11:07:22+00:00',
  },
  {
      username:    'mholmes',
      displayname: 'Mycroft Holmes',
      email:       'mholmes@gov.uk',
      authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
      lastSeen:    '2019-05-10T11:21:36+00:00',
  },
  {
      username:    'iadler',
      displayname: 'Irene Adler',
      email:       null,
      authHash:    '319d55944f13760af0a07bf24bd1de28',
      lastSeen:    '2019-05-17T11:12:12+00:00',
  },
];
function keyByUsernameReducer(acc, person) {
  return {...acc, [person.username]: person};
}
const peopleObj = peopleArr.reduce(keyByUsernameReducer, {});
console.log(peopleObj);

// reverse
let abcArr = ['a', 'b', 'c'];

console.log(abcArr.reverse());