const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = 'O Senhor dos Anéis';

// forma sem regex
// function authorWith3DotsOnName() {
//   let threeDotedAuthor = '';
//   let dots = 0;

//   // novo array apenas com os nomes
//   const names = books.map((book) => book.author.name);
//   const nameDots = names.forEach((name) => {

//     // busco os caracteres dos nomes e verifico se algum tem 3 pontos
//     for (let char in name) {
//       if (name[char] === '.') {
//         dots += 1;
//         if (dots === 3) {
//           threeDotedAuthor = name;
//         }
//       }
//     }
//   });
//   return threeDotedAuthor;
// }


// testando com regex (havia aprendido com o site: https://www.regexone.com)
function authorWith3DotsOnName() {
  const regTest = /.\...\...\./;
  let bookName = '';
  books.filter(book => {
    if (regTest.test(book.author.name)) {
      bookName = book.name;
    }
  });
  return bookName;
}

// contando os pontos na string
// tinha uma ideia como fazer, mas aprendi de fato neste link: https://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240
const string = 'J. R. R. Tolkien';

// '/' abre e fecha o regex, '\.' verifica o char ponto, 'g' verifica todos os matchs (caso não tivesse o 'g', ia retornar apenas 1, ou seja a primeira).
let count = (string.match(/\./g)).length;
console.log(count);

// console.log(authorWith3DotsOnName());

assert.deepEqual(authorWith3DotsOnName(), expected_result);