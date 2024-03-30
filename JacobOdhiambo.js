//functions - self contained module tht performes a specic task
function addNumbers(num1,num2){
    return console.log(num1+num2);
}
//calling the function
addNumbers(3,5);

addNumbers(-1,7);

addNumbers(0,0);

addNumbers(10.5876,10.443);


//Review
/* This code is a JavaScript program that defines a function called addNumbers.
The function takes two arguments, num1 and num2, and returns the sum of the two numbers.
The function is called four times with different arguments, and the output is printed to the console.

The code follows a common pattern of defining a function and calling it multiple times in a row.
This is a good way to break down a complex task into smaller, more manageable steps.
The use of comments and whitespace makes the code easier to read and understand.*/


function isEven(num) {
    return console.log(num % 2 ===0 ? 'The number is Even' : 'The number is Odd');
}

//testing functions

isEven(3); //The number is odd

isEven(7); //The number is odd

isEven(-2); //The number is even

isEven(0); //The number is even

isEven(4); //The number is even

isEven(10.5876); //should be fixed in the future (0.5876000000000001)

/*
This code defines a function called isEven that takes a single argument num.
It then checks if the remainder of dividing num by 2 is equal to 0.
If it is, the function returns a string saying "The number is Even".
If the remainder is not equal to 0, the function returns a string saying "The number is Odd".

The function is then tested by calling it with different numbers, including -2, 0, and 4.
The output is printed to the console.
*/

//Changing the arrangement of leters in a string
function reverseString(str) {
    return console.log(str.split('').reverse().join(''));
}
reverseString("Hello"); // returns "olleH"

reverseString("Sheriff"); // returns "ffirehS"

reverseString("12345"); // returns "54321"

/*The function takes a string as an argument and returns
the reversed string. It does this by using the split method
to split the string into an array of characters,
the reverse method to reverse the order of the characters in the array,
and the join method to join the characters back together to form a new string.
*/


function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the original string with its reverse
    return formattedStr === formattedStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false