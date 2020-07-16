//3- Agora inverta o lado do triângulo.
//Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos.
//Você precisará de uma lógica para imprimir espaços também.

let n = 7;
let output = "";
let symbol = "*";
let symbolColumn = n;

for (let outsideIndex = 0; outsideIndex < n; outsideIndex += 1) {
    for (let insideIndex = 0; insideIndex <= n; insideIndex += 1) {
        if (insideIndex < symbolColumn) {
            output += ' ';
        } else {
            output += symbol;
        }
    }

    console.log(output);
    output = '';
    symbolColumn -= 1;
}   