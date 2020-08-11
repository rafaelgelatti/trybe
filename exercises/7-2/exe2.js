const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1- Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addShift = (object, key, value) => {
  //adding a key
  object[key] = key;
  //adding a value to the new key
  object[key] = value;
  console.log(object);
};

console.log('');
console.log('--- 1');
console.log('');
addShift(lesson2, 'turno', 'manhã');

// 2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => {
  const keysArray = Object.keys(object);
  for (key in keysArray) {
    console.log(keysArray[key]);
  }
};

console.log('');
console.log('--- 2');
console.log('');
listKeys(lesson3);

// 3- Crie uma função para mostrar o tamanho de um objeto.

const objectSize = (object) => {
  const arraySize = Object.keys(object);
  let count = 0;
  for (key in arraySize) {
    count += 1;
  }
  console.log(`Object size: ${count}.`)
};

console.log('');
console.log('--- 3');
console.log('');
objectSize(lesson1);

// 4- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (object) => {
  const valuesArray = Object.values(object);
  for (value in valuesArray) {
    console.log(valuesArray[value]);
  }
};

console.log('');
console.log('--- 4');
console.log('');
listValues(lesson1);

// 5- Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons)

const allLessons = {};
allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

console.log('');
console.log('--- 5');
console.log('');
console.log(allLessons);

// 6- Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

let totalStudents = 0;
let studentsArray = [];
studentsArray = Object.entries(allLessons);
for (lessons in studentsArray) {
  totalStudents += studentsArray[lessons][1].numeroEstudantes;
}

console.log('');
console.log('--- 6');
console.log('');
console.log(`Total de estudantes: ${totalStudents}`);

// 7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (object, value) => {
  const objectValues = Object.values(object);
  for (let i = 0; i < objectValues.length; i += 1) {
    if (i === value) {
      console.log(objectValues[i]);
    }
  }
};

console.log('');
console.log('--- 7');
console.log('');
getValueByNumber(lesson1, 0);

// 8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (object, key, value) => {
  match = false;
  const pairs = Object.entries(object);
  for (pair in pairs) {
    if(key === pairs[pair][0] && value === pairs[pair][1]) {
      match = true;
    }
  }

  if (match) {
    console.log('It\'s a Bingo!');
  } else {
    console.log('No match.');
  }
};

console.log('');
console.log('--- 8');
console.log('');
verifyPair(lesson2, 'professor', 'Carlos');
verifyPair(lesson2, 'professor', 'Junior');

// 9- Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const countTotalStudents = (object) => {
  let totalStudents = 0;
  let studentsArray = [];
  studentsArray = Object.entries(object);
  for (lessons in studentsArray) {
    totalStudents += studentsArray[lessons][1].numeroEstudantes;
  }
  console.log(`Total de estudantes: ${totalStudents}`);
};

console.log('');
console.log('--- 9');
console.log('');
countTotalStudents(allLessons);

// 10- Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const createReport = (object, professor) => {
  const report = {professor: '', aulas: [], estudantes: 0};
  const totalArray = Object.entries(object);
  let reportStudents = 0
  for (value in totalArray) {
    if (totalArray[value][1].professor === professor) {
      report.professor = totalArray[value][1].professor;
      report.aulas.push(totalArray[value][1].materia);
      reportStudents += totalArray[value][1].numeroEstudantes;
    }
  }
  report.estudantes = reportStudents;

  console.log(report);
};

console.log('');
console.log('--- 10');
console.log('');
createReport(allLessons, 'Maria Clara');