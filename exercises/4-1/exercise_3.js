let a = 5;
let b = 17;
const c = 25;
let greater = a;

if (b > greater) {
    greater = b;
    if (c > greater) {
        greater = c;
    }
}

console.log("O maior valor entre " + a + ", " + b + " e " + c + " é: " + greater);

// revisiting in 18/08/2020
console.log(`The greater value between ${a}, ${b} and ${c} is: ${greater}`);