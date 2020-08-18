let a = 12;
let b = 12.5;

if (a > b) {
    console.log(a + " é maior que " + b);
} else if (b > a) {
    console.log(b + " é maior que " + a);
} else {
    console.log(a + " e " + b + " são iguais");
}

// revisiting 18/08/2020
const testGreater = (a,b) => {
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    } else if (b > a) {
        console.log(`${b} is greater than ${a}`);
    } else {
        console.log(`${a} equals ${b}`);
    }
}

testGreater(75,32);
testGreater(19,54);
testGreater(0,0);