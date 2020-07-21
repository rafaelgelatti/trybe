//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let symbol = '*';
let line = '';
let half = 0;

if (n % 2 !== 0) {
  half = (n / 2) + 0.5;
} else {
  half = n / 2;
}

for (let i = 0; i < n; i += 1) {
  line += '-';
}

line[half] = '*';

console.log(line);