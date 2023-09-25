// Write a JavaScript program that checks if a number is even or odd. Display a message on the console indicating whether the number is even or odd.

function checkEvenOrOdd(numberToCheck: number): void{
    if (numberToCheck % 2 === 0) {
        console.log(numberToCheck + " is even.");
    } else {
        console.log(numberToCheck + " is odd.");
    }
}

// Call the function with the number you want to check
const numberToCheck: number = 4; 
checkEvenOrOdd(numberToCheck);
