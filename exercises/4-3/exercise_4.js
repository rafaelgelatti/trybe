//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 19;
let symbol = '*';
let output = '';
let half = 0;

function findHalf(input) {
  if (input % 2 === 0) {
    return input / 2;
  }

  return (input / 2) + 0.5;
}

half = findHalf(n);
let lineStart = half - 1;
let rightIndex = half;
let leftIndex = half;

for (lineStart; lineStart < n; lineStart += 1 ) {
  for (let column = 1; column <= n; column += 1) {
    if (column > leftIndex && column < rightIndex) {
      output += symbol;
    } else {
      output += ' ';
    }
  }

  console.log(output);
  output = '';
  leftIndex -= 1;
  rightIndex += 1;
}