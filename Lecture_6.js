
// #A
// Creating a regular expression using / delimiters
// let regexA = /hello/;
// let text = "Hello world, hello JavaScript!";
// console.log(regexA.test(text)); // Output: true (matches 'hello' in lowercase

// // #B
// // Pattern matching for string
// // in this example
// // the string to to look for the pattern is: 'It's always sunny in Sunnyvale
// // the pattern is 'sunny *. +
// // 'sunny *. +' means "sunny' and whatever comes after it
// // 'replace' method will replace the found part with given replacement
// // ' *** ': is the replacement
// let sentence = 'It\'s always sunny in Sunnyvale';
// console.log(sentence.replace(/sunny *. +/, ' *** ')) // It's always ***
// console.log(sentence.replace('always', '_never ')) // It's never sunny in Sunnyvale


// // #C
// let regexC1 = /hello/i; // /pattern/modifiers
// let result1 = regexC1.test('Hello World'); // true
// console.log(result1); 

// let regexC2 = new RegExp('phuoc', 'i'); //  new RegExp(pattern, modifiers)
// let result2 = regexC2.test('Hello World'); // false
// console.log(result2); 

// #D
// Chuỗi để test
// let testString = "Hello world 123 \nworld again";
// // Initialize regex variables with different patterns and modifiers
// let regexD1 = /hello/i;       // Case-insensitive
// console.log("regexD1 matches:", regexD1.test(testString));         // find 'hello' (case-insensitive)

// let regexD2 = /\d+/g;         // Global search for digits
// console.log("regexD2 matches:", testString.match(regexD2));        // match any digit

// let regexD3 = /^world/m;      // Multiline search for 'world' at the beginning of a line
// console.log("regexD3 matches:", testString.match(regexD3));        // Check for 'world' at the beginning of the line (multiline)

// let regexD4 = /\s+/g;         // Global search for whitespaces
// console.log("regexD4 matches:", testString.match(regexD4));        // Find all whitespace

// #E
// Create pattern with single character
// let text = "Toi la Vo Huu Phuoc \t sinh nam 2004 \n va thich \"chay bo\" hehe";

// `\t` matches tab characters
// console.log(text.replace(/\t/g, 'sfgnfgn')); 

// console.log(text.replace(/\t/g, '***')); 


// // `\v` matches vertical tab
// console.log(text.replace(/\v/g, '***')); 


// // `\n` matches newline
// console.log(text.replace(/\n/g, '***')); 


// // `\r` matches carriage return
// console.log(text.replace(/\r/g, '***')); 


// // `\f` matches form feed
// console.log(text.replace(/\f/, '***'));


// #F
// let text = "tre con sa mac truyen tai nhau bai dong dao,... ngay hoang de tro ve nha!";

// // \b: Match at the beginning or end of a word
// console.log(text.replace(/\bmac\b/g, '***')); 

// // \B: Match not at the beginning or end of a word
// console.log(text.replace(/\Bde\B/g, '***')); 

// // ^: Match at the beginning of the string
// console.log(text.replace(/^tre/, '***')); 

// // $: Match at the end of the string
// console.log(text.replace(/nha!$/, '***')); 

// // (?=de): Lookahead assertion (followed by 'de')
// console.log(text.replace(/hoang(?= de)/g, '***')); 

// // (?!de): Negative lookahead assertion (not followed by 'de')
// console.log(text.replace(/tro(?! de)/g, '***')); 

// #G
// let text = "Suong rong dom la dom hoa,\n nuoc chay ve tren cao nguyen da,...";

// // [abc]: Match any character between 'a', 'b', or 'c'
// console.log(text.replace(/[abc]/g, '*'));

// // [^abc]: Match any character not between 'a', 'b', or 'c'
// console.log(text.replace(/[^abc]/g, '*')); 

// // [a-z]: Match any character from 'a' to 'z'
// console.log(text.replace(/[a-z]/g, '*')); 

// // [A-Z]: Match any character from 'A' to 'Z'
// console.log(text.replace(/[A-Z]/g, '*'));

// // [0-9]: Match any digit from '0' to '9'
// console.log(text.replace(/[0-9]/g, '*')); 

// // [^0-9]: Match any character not from '0' to '9'
// console.log(text.replace(/[^0-9]/g, '*')); 

// // [a-z0-9]: Match any lowercase letter or digit
// console.log(text.replace(/[a-z0-9]/g, '*')); 

// // (x|y): Match 'x' or 'y'
// console.log(text.replace(/(a|e)/g, '*')); 

// #H
// let text = "vo cung nghi ngo, doi tuyen toi yeu danh te hon ca...~~~";

// // n{3}: Character n exactly 3 times
// console.log(text.replace(/~~~{3}/g, '***'));  

// // n{3,}: Character n at minimum 3 times
// console.log(text.replace(/~{3,}/g, '***')); 

// // n{3, 5}: Character n at least 3 times, no more than 5 times
// console.log(text.replace(/~{3,5}/g, '***')); 

// // n?: Character n 0 or 1 time (equals to n{0,1})
// console.log(text.replace(/t?/g, '*')); 

// // n+: Character n at least 1 time (equals to n{1,})
// console.log(text.replace(/t+/g, '*')); 

// // n*: Character n at least 0 time (equals to n{0,})
// console.log(text.replace(/t*/g, '*')); 

// #I
// let text = "Hello world, is that youyouyouyouyouyou? Yelena? 2024";

// // 1. Alternation: Match either 'phuoc' or 'world'
// console.log("Alternation: " + text.replace(/phuoc|world/,"*")); 

// // 2. Grouping: Match the whole 'youyouyouyouyouyou'
// console.log("Grouping: " + text.replace(/(you)+/,"*")); 

// // 3. Grouping only: do not remember the characters that match this group.
// console.log("Grouping: " + text.replace(/(?:2024)+/, "*"));

// // 4. Match the same characters that were matched when group number n was first matched
// console.log("Grouping: " + text.replace(/(Yelena)\1+/, "*"));




