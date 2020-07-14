//1st try com GAMBIARRA do ./bonus_3.js
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];

for (i = 0; i < numbers.length; i += 1) {
    multipliedNumbers.push(numbers[i] * numbers[i + 1]);

    if (i === numbers.length - 1) {
        multipliedNumbers.pop();

        multipliedNumbers.push(numbers[i] * 2);
    }
}

console.log("Novo array: " + multipliedNumbers);