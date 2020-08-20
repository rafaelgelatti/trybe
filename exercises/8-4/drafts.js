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