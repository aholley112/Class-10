// Write a JavaScript program that calculates and displays the factorial of a number. Prompt the user for a number and display its factorial on the console.


function calculateFactorial(number: number): number {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }
  
  // Prompt the user for a number
  const input: string | null = prompt('Please enter a number:');
  
  // Check if the user provided a valid number
  if (input !== null) {
    const number = parseInt(input);
  
    if (!isNaN(number)) {
      if (number >= 0) {
        // Calculate the factorial
        const factorial = calculateFactorial(number);
        console.log(`The factorial of ${number} is ${factorial}.`);
      } else {
        console.log('Please enter a non-negative number.');
      }
    } else {
      console.log('Invalid input. Please enter a valid number.');
    }
  } else {
    console.log('No input provided. Please enter a number.');
  }
  