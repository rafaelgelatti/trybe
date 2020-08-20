let numbers = [32, 15, 3, 2, -5, 56, 10];

// 'res' é o resultado de cada iteração, 'num' é o elemento de cada iteração
const getSub = numbers.reduce((res, num) => {
  return res - num;
});

// console.table(getSub);

const getSum = (result, number) => {
  // console.log(result);
  return result + number;
}

// const sumNumbers = numbers.reduce(getSum);
sumNumbers = numbers.reduce(getSum, 1);
// console.log(sumNumbers);

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 56

// numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// using filter and reduce
const getEvens = numbers.filter(number => number % 2 === 0);
const sumOfAllEvens = getEvens.reduce((result, number) => {
  return result + number;
});

// outra forma de fazer o mesmo
const getEven = (number) => number % 2 === 0;
const sumEven = (result, number) => result + number;

const sumOfEvens = numbers.filter(getEven).reduce(sumEven);

// console.table(sumOfEvens);

// usando apenas o reduce

const newArr = numbers.reduce((result, number) => {
  return (number % 2 === 0) ? result + number : result;
});

// console.log(newArr);

// tentando acessar os valores com index no 'map'

const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const notas1 = [9, 8, 10, 7, 5];

// function findAverage(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     total += arr[i];
//   }

//   return total / arr.length;
// }

// const notasAvg = notas.map(findAverage);

// console.log(notasAvg);

// testando refatorar com HOF
const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];

function studentAverage() {  
  const avgGrades = notas.map(arr => {
    let total = 0;
    arr.forEach(grade => {
      total += grade;
    });
    return total / arr.length;
  });
  const output = alunos.map((aluno, index) => {
    return {name: aluno, average: avgGrades[index]};
  });
  return output;
}

console.log(studentAverage());