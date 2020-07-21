function compareEnd(string1, string2) {
    let newWord = '';
    let startIndex = string1.length - string2.length;

    for (let i = startIndex; i < string1.length; i += 1) {
        newWord += string1[i];
    }

    if (newWord === string2) {
        return true;
    }

    return false;
}

console.log(compareEnd("Trybe", "be"));