function isPalindrome(input) {
    let inputLC = input.toLowerCase();
    let reversedInput = '';

    for (let i = inputLC.length - 1; i >= 0; i -= 1) {
        reversedInput += inputLC[i];
    }

    console.log(reversedInput);

    if (inputLC === reversedInput) {
        return true;
    } else {
        return false;
    }
}



console.log("É palíndromo? " + isPalindrome("Arara"));
console.log("É palíndromo? " + isPalindrome("Banana"));