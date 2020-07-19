function testStringLength(arrayOfStrings) {
    let greatestString = arrayOfStrings[0];

    for (let string in arrayOfStrings) {
        if (arrayOfStrings[string].length > greatestString.length) {
            greatestString = arrayOfStrings[string];
        }
    }

    return greatestString;
}

console.log(testStringLength(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', "Nabucodonosor"]));