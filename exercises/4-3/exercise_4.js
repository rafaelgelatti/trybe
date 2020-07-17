//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let line = '';
let symbol = '*';
let half = (n / 2) + 0.5

for(outterIndex = 1; outterIndex <= n; outterIndex += 2) {
  for (let index = 1; index <= n; index += 1) {
    if (index % 2 !== 0) {
      if (index === half) {
        line += symbol;
      } else {
        line += ' ';
      }
    }
  }

  console.log(line);
  line = '';
}