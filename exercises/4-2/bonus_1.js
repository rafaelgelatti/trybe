//1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[j] > numbers[i]) {
            let aux = numbers[j];

            numbers[j] = numbers[i];
            numbers[i] = aux;
        }
    }
}

console.log("Array sorted: " + numbers);