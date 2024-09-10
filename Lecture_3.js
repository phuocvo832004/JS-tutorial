"use strict"; // Enable strict mode

// Whitespace between words is significant, but otherwise ignored

// Comments: Press ctrl + / to quickly comment out code

// Variable declarations (with valid identifiers)
let number1 = 10;
const _name = "Alice";
var $status = true;

// Semicolon at the end of a line is optional
let sum = number1 + 20;

// Function to add two numbers (function can be called multiple times)
function addNumbers(a, b) {
    return a + b;
}

// Literal: number
// Literal: string, identifier starts with underscore
// Literal: boolean, identifier starts with dollar sign

// Semicolon omitted here (optional)

// Call the function
let result = addNumbers(10, 20);

// Reserved keyword usage (should cause an error)
// var class = "Math"; // Uncommenting this will cause a syntax error

// Log the result using console.log() for debugging
console.log("The sum is:", result);

// Example of an object literal
const user = {
    name: "Bob",
    age: 38
};

// Function expression (another way to declare a function)
const greetUser = function(name) {
    console.log("Hello, " + name);
};

// Call the function
greetUser(_name);

// Strict mode will help secure and optimize this code, preventing certain errors
