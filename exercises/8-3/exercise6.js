    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {

  // ESTILO OLDSCHOOL
  // let averageNotas = [];
  // for (let i = 0; i < notas.length; i += 1) {
  //   let sumNotas = 0;
  //   let totalTests = 0;
  //   for(let j = 0; j < notas[i].length; j += 1) {
  //     sumNotas += notas[i][j];
  //     totalTests += 1;
  //   }
  //   sumNotas /= totalTests;
  //   averageNotas.push(sumNotas);
  // };

  // let objects = [];
  // for (let i = 0; i < alunos.length; i += 1) {
  //   objects.push({ name: alunos[i], average: averageNotas[i] });
  // }

  // ESTILO ARS NOVA
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

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage());

assert.deepEqual(studentAverage(), expected);