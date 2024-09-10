// Declare and assign variables
let num1 = 10;
let num2 = 5;

// Perform mathematical operations
let sum = num1 + num2;
let product = num1 * num2;

// Print results using console.log()
console.log("Sum:", sum);            // 15
console.log("Product:", product);    // 50

// Convert numbers to strings
let num1Str = num1.toString();
console.log("num1 as a string:", num1Str);  // "10"

// Convert strings to numbers
let str = "25.67";
let parsedInt = parseInt(str);         // Convert to an integer
let parsedFloat = parseFloat(str);     // Convert to a floating-point number
console.log("Parsed Integer:", parsedInt);    // 25
console.log("Parsed Float:", parsedFloat);    // 25.67

// Check number limits and special values
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Min Value:", Number.MIN_VALUE);               // 5e-324
console.log("NaN (Not a Number):", NaN);
