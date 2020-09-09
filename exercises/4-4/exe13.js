// Dicas:

// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |  

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanAlgorithm(input) {
  input = input.toUpperCase();
  // input = 'DCCLXXXIX'
  let output = 0;
  for (let index = 0; index < input.length; index += 1) {
    if (romanNumerals[input[index]] < romanNumerals[input[index + 1]]) {
      output += (romanNumerals[input[index + 1]] - romanNumerals[input[index]]);
      index += 1;
    } else {
      output += romanNumerals[input[index]];
    }
  }
  return `${input}: ${output}`;
}

console.log(romanAlgorithm('xiX'));
console.log(romanAlgorithm('xii'));
console.log(romanAlgorithm('dcc'));
console.log(romanAlgorithm('xiX'));
console.log(romanAlgorithm('mmcdxxi'));
console.log(romanAlgorithm('dcclxxxix'));
console.log(romanAlgorithm('ccxlvi'));
console.log(romanAlgorithm('xxxix'));