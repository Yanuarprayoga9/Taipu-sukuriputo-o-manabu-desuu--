const test = "radar";

function palindromeChecker(kata: string): boolean {
    let result = "";
    for (let i = kata.length - 1; i >= 0; i--) {
        result = result + kata.charAt(i);
    }
    console.log(result);
    return result === kata; 
}

console.log(palindromeChecker(test)); 
