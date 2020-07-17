const a = 5;
const b = 17;
const c = 25;
let greater = a;

if (b > greater) {
    greater = b;
    if (c > greater) {
        greater = c;
    }
}

console.log("O maior valor entre " + a + ", " + b + " e " + c + " é: " + greater);