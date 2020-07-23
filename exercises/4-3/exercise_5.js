let n = 5;
let output = '';
let symbol = '*';
let half = (n / 2) + 0.5;
let midRight = half;
let midLeft = half;

for (let line = ((n / 2) - 1); line < n; line += 1) {
    for (let column = 1; column <= n; column += 1) {
        if (column > midLeft && column < midRight) {
            output += symbol;
        } else {
            output += ' ';
        }
    }

    console.log(output);
    output = '';
    midRight += 1;
    midLeft -= 1;
}