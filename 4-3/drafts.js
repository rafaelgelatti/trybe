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