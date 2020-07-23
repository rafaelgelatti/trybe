//exe1

let n = 3;
let line = '';
let asterisk = "*";

for (let index = 0; index < n; index += 1) {
    line += asterisk;
}

for (let index = 0; index < n; index += 1) {
    console.log(line);
}

//exe2

line = '';

for (let i = 0; i <= n; i += 1) {
    console.log(line);

    line += asterisk;
}

//exe3

line = '';
let initialPosition = n ;

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j <= n ; j += 1) {
        if (j < initialPosition) {
            line += ' ';
        } else {
            line += asterisk;
        }
    }

    console.log(line);
    line = '';
    initialPosition -= 1;
}

//exe4
//Não precisa imprimir os espaços depois!

n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
symbol = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex++) {
  for (lineColumn = 1; lineColumn <= n; lineColumn++) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight--;
  controlLeft++;
}

//exe5


n = 7;
lineInput = [];
let baseMatrix = [];
symbol = '*';
let matrix = [];
midOfMatrix = (n + 1) / 2;
controlLeft = 1;
controlRight = n - 2;

for (let lineColumn = 0; lineColumn < n; lineColumn++) {
  baseMatrix[lineColumn] = symbol;
}
matrix[0] = baseMatrix;
for (let lineIndex = 1; lineIndex < n; lineIndex++) {
  for (let lineColumn = 0; lineColumn < n; lineColumn++) {
    if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput[lineColumn] = symbol;
    } else {
      lineInput[lineColumn] = ' ';
    }
  }
  matrix[lineIndex] = lineInput;
  controlLeft++;
  controlRight--;
  lineInput = [];
  if (controlLeft > controlRight) break;
}
let result = '';
for (let lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex--) {
  for (let lineColumn = 0; lineColumn < n; lineColumn++) {
    result = result + matrix[lineIndex][lineColumn];
  }
  console.log(result);
  result = '';
}

//exe6

let divisors;
let numberToCheck = 25;

for (let number = 2; number < numberToCheck && divisors !== 1; number++) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors++;
}

if (divisors === 0) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');