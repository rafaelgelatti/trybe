function testIndex(array) {
let highestIndex = 0;
let highestNumber = array[0];

    for (let i in array) {
        if (array[i] > highestNumber) {
            highestNumber = array[i];
            highestIndex = i;
        }
    }

    return highestIndex;
}

console.log(testIndex([2, 3, 6, 7, 10, 1]));