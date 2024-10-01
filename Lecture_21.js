

// #A
// the followings are expressions
// 5 * 10 // computes to 50
// x * 10 // expression can contain variable(s)
// 'John' + ' ' + 'Doe' // computes to 'John Doe'


// #B
// Declaration statement
// let x // a complete sentence

// // Assignment statement
// x = 10 

// a statement block housed by curly brackets
// {
//     let name = 'John'
//     let greet
//     greet = 'Hello ' + name
//     console.log(greet) // Hello John
// }


// #C
// Declare statement
// let score = 85;

// // Conditional statement
// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {     // true
//     console.log("Grade: B");  // This block will be executed
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else {
//     console.log("Grade: F");
// }

// console.log("Ket thuc conditional statement");


// #D
// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;  // Exit the switch after this case is executed
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");  // This block will be executed because day = 3
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day number");
// }


// #E
// do...while:
// let count = 4;

// while (count > 0) {
//     console.log(count);
//     count--; // Decrease the count
// }

// console.log("end the loop");

// while:
// let number = 0;

// do {
//     console.log("Number:", number);
//     number++; // Increase the number
// } while (number < 3);

// console.log("end while loop");


// #F
// for loop
// const arr = [1,2,3,'a','abc', {name: 'phuoc',age: 20, city: 'Hue'}]
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// #G
// Define an object
// const student = {
//     name: "quynh",
//     age: 20,
//     grade: "4",
//     school: "NTP"
// };

// Use for...in loop to iterate over properties of the object
// for (let property in student) {
//     console.log(property + ": " + student[property]); // student[property] means corresponding value of the property
// }


// #H
// Example of for...of:
// const arr = [1,2,3,'a','abc', {name: 'phuoc',age: 20, city: 'Hue'}]
// for(let element of arr) {
//   console.log(element)
// }

// Combination of for...of and Object.entries(obj):
// const fruits = ["apple", "banana", "cherry"];

// for (const [index, fruit] of Object.entries(fruits)) {
//     console.log( index + " " + fruit);
// }


// #I
// const fruits = ["apple", "banana", "cherry"];

// for (const [index, fruit] of Object.entries(fruits)) {
//     console.log( index + " " + fruit);
//     break;
// }


// #J
// const fruits = ["apple", "banana", "cherry"];

// for (const [index, fruit] of Object.entries(fruits)) {
//     if(fruit == "banana") continue;
//     console.log( index + " " + fruit);
// }
