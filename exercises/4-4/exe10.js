function mostRepeated(array) {
    let count = 0;
    let highestCount = 1;
    let mostRepeatedNumber = array[0];

    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (array[j] === array[i]) {
                count += 1;
            }

            if (count > highestCount) {
                highestCount = count;
                mostRepeatedNumber = array[j];
            }
        }

        count = 0;
    }

    return mostRepeatedNumber;
}

console.log(mostRepeated([3, 2, 5, 2, 2, 8, 8, 2, 3]));