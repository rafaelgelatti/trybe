// 1
// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random()* 11);

//   if (number > 10 || number <= 5) {
//     return reject(number);
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg))
// .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

// 2
// const fetch = require('node-fetch');

// async function verifiedFetch(url) {
//   if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//     return fetch(url)
//       .then((r) => r.json())
//       .then((r) => (r.value));
//   }
//   throw new Error('endpoint não existe');
// }

// async function sendJokeToFriend(name) {
//   const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((err) => err);
//   console.log(message);
// }

// sendJokeToFriend("Anna");

//
const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () =>  Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
                     .reduce((number, acc) => number + acc, 0);

  if (sum > 8000) throw new Error();

  return sum;
};

// já da para aplica hof direto no array criado
const generateArrayFromSum = sum => [2, 3, 5, 10].map(number => Math.round(sum / number));

// assim que coloca o async em uma arrow function
const fetchPromise = async () => {
  try {
    // await
    const sum = await sumRandomNumbers();
    const array = await generateArrayFromSum(sum);

    console.log(array);
    // catch depois do try
  } catch(e) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();