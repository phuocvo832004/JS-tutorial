// Declaring strings with different quotes
let singleQuoteString = 'Hello';
let doubleQuoteString = "World";
let backtickString = `Welcome to JavaScript!`;

// String templating with backticks
let name = "Alice";
let greeting = `Hello, ${name}! How are you?`;
console.log(greeting);  // Output: Hello, Alice! How are you?

// Accessing string length
console.log("Length of backtickString:", backtickString.length);  // Output: 21

// Accessing characters by index and using charAt()
console.log("Character at index 1:", backtickString[1]);  // Output: e
console.log("Character at index 2 using charAt():", backtickString.charAt(2));  // Output: l

// Using charCodeAt() to get the UTF-16 code of a character
console.log("UTF-16 code of the first character:", backtickString.charCodeAt(0));  // Output: 87 (for 'W')

// Splitting a string into an array of substrings
let sentence = "JavaScript is awesome!";
let words = sentence.split(" ");
console.log(words);  // Output: ['JavaScript', 'is', 'awesome!']

// Extracting a substring using substring() and slice()
let substringExample = sentence.substring(0, 10);
console.log("Substring:", substringExample);  // Output: JavaScript

let sliceExample = sentence.slice(11, 13);
console.log("Slice:", sliceExample);  // Output: is
