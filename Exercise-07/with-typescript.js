// Write a JavaScript program that calculates and displays the factorial of a number. Prompt the user for a number and display its factorial on the console.
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    else {
        return number * calculateFactorial(number - 1);
    }
}
// Prompt the user for a number
var input = prompt('Please enter a number:');
// Check if the user provided a valid number
if (input !== null) {
    var number = parseInt(input);
    if (!isNaN(number)) {
        if (number >= 0) {
            // Calculate the factorial
            var factorial = calculateFactorial(number);
            console.log("The factorial of ".concat(number, " is ").concat(factorial, "."));
        }
        else {
            console.log('Please enter a non-negative number.');
        }
    }
    else {
        console.log('Invalid input. Please enter a valid number.');
    }
}
else {
    console.log('No input provided. Please enter a number.');
}
