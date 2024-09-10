
// #A
// Creating a regular expression using / delimiters
let regexA = /hello/;
let text = "Hello world, hello JavaScript!";
console.log(regexA.test(text)); // Output: true (matches 'hello' in lowercase

// #B
// Pattern matching for string
// in this example
// the string to to look for the pattern is: 'It's always sunny in Sunnyvale
// the pattern is 'sunny *. +
// 'sunny *. +' means "sunny' and whatever comes after it
// 'replace' method will replace the found part with given replacement
// ' *** ': is the replacement
let sentence = 'It\'s always sunny in Sunnyvale';
console.log(sentence.replace(/sunny *. +/, ' *** ')) // It's always ***
console.log(sentence.replace('always', '_never ')) // It's never sunny in Sunnyvale


// #C
let regexC1 = /hello/i; // /pattern/modifiers
let result1 = regexC1.test('Hello World'); // true
console.log(result1); 

let regexC2 = new RegExp('phuoc', 'i'); //  new RegExp(pattern, modifiers)
let result2 = regexC2.test('Hello World'); // false
console.log(result2); 
