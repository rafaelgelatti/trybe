// 1 - Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
const fatorial = (n) => {
  let fatN = n;
  if (n > 0) {
    for (let i = n - 1; i > 0; i -= 1) {
      fatN *= i;
    }
  }
  return fatN;
}

console.log(fatorial(5));


// 2- Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (string) => {
  const array = string.split(' ');
  let charCount = 0;
  let word = '';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > charCount) {
      charCount = array[i].length;
      word = array[i];
    }
  }
  return word;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

// 3 - Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// const clickButton = document.getElementById('clicker');
// const clickDiv = document.getElementById('clicker-counter');
// let clickCount = 0;
// clickButton.addEventListener('click', () => {
//   clickCount += 1;
//   clickDiv.innerHTML = clickCount;
// });

// 4 - Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

// Exemplo:

// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

// Exemplo:

// "Tryber x aqui!

// Minhas cinco principais habilidades são:

// JavaScript;
// HTML; ...
// #goTrybe".

// f1
const func1 = (string) => {
  let input = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'x') {
      input += 'y';
    } else {
      input += string[i];
    }
  }
  return input;
}

console.log(func1('1234xxx'));

// f2
var skills = ['JavaScript', 'CSS', 'HTML', 'Git', 'Bass'];
const func2 = () => {
  skills.push(func1('1234xxx'));

  for (let i = 1; i < skills.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (skills[j] > skills[i]) {
        let aux = skills[i];
        skills[i] = skills[j];
        skills[j] = aux;
      }
    }
  }

  return skills;
}

console.log(func2());