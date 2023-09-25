// Write a JavaScript program that determines if a given year is a leap year. Prompt the user for a year and display a message on the console indicating whether it is a leap year or not.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// Prompt the user for a year
var input = prompt('Please enter a year:');
// Check if the user provided a valid year
if (input !== null) {
    var year = parseInt(input);
    if (!isNaN(year)) {
        if (year >= 0) {
            // Check if it's a leap year
            if (isLeapYear(year)) {
                console.log("".concat(year, " is a leap year."));
            }
            else {
                console.log("".concat(year, " is not a leap year."));
            }
        }
        else {
            console.log('Please enter a non-negative year.');
        }
    }
    else {
        console.log('Invalid input. Please enter a valid year.');
    }
}
else {
    console.log('No input provided. Please enter a year.');
}
