const assert = require('assert')

const alex = {
    name: "Alex",
    age: 26,
    likes: ["fly fishing"],
    nationality: "Australian"
}

const gunnar = {
    name: "Gunnar",
    age: 30,
    likes: ["hiking", "scuba diving", "taking pictures"],
    nationality: "Icelandic"
}

// complete a assinatura da função abaixo

// muito trabalho
// const {name: nameAlex, age: ageAlex, likes: likesAlex} = alex;
// const {name: nameGunnar, age: ageGunnar, likes: likesGunnar} = gunnar;
// const personLikes = (...person) => `${person[0]} is ${person[1]} years old and likes ${person[2].join(', ')}.`
// console.log(personLikes(nameAlex, ageAlex, likesAlex));
// console.log(personLikes(nameGunnar, ageGunnar, likesGunnar));

// agora entendi
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`

assert.equal(personLikes(alex), "Alex is 26 years old and likes fly fishing.")
assert.equal(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.")