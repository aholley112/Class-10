// Write a JavaScript program that prompts the user for their name and displays a personalized greeting message on the console.

const userName: string | null = prompt('Please enter your name:');

// Check if the user provided a name
if (userName !== null && userName !== '') {
  // Display a personalized greeting message
  console.log(`Hello, ${userName}!`);
} else {
  console.log('You did not provide a  name.');
}
