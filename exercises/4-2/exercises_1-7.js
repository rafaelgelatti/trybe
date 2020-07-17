let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (number in numbers) {
    console.log(numbers[number]);
}

//2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let sumOfAll = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sumOfAll += numbers[i];
}

console.log("Soma total: " + sumOfAll);

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let sum = 0;
let average = 0;

for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

average = sum / numbers.length;
console.log("Valor médio dos números: " + average);

//4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (average > 20) {
    console.log(average + " maior que 20");
} else {
    console.log(average + " menor ou igual a 20")
}

//5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let higherNumber = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > higherNumber) {
        higherNumber = numbers[i];
    }
}

console.log("Maior valor: " + higherNumber);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let odds = 0;

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        odds += 1;
    }
}

if (odds > 0) {
    console.log("Number of odd numbers: " + odds);
} else {
    console.log("Nenhum valor ímpar encontrado")
}

//7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let lowerNumber = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < lowerNumber) {
        lowerNumber = numbers[i];
    }
}

console.log("Lower number in the array: " + lowerNumber)