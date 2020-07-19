function testLowestIndex(array) {
    let lowestNumber = array[0];
    let lowestIndex = 0;

    for (let i in array) {
        if (array[i] < lowestNumber) {
            lowestNumber = array[i];
            lowestIndex = i;
        }
    }

    return lowestIndex;
}

console.log(testLowestIndex([2, -44, 6, 7, -10, 0, -3]));