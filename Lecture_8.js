
// #B
// Literal declaration
let arr1 = [42, "hello", true, {name: "phuoc"}, [1, 2, 3], null];

// With Array constructor
let arr2 = new Array(42, "hello", true, {name: "phuoc"}, [1, 2, 3], null);

// #C

// // Declare an array
// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// // Access elements using index
// console.log("First fruit:", fruits[0]);  // Output: Apple
// console.log("Second fruit:", fruits[1]);  // Output: Banana

// // Find the length of the array
// console.log("Total number of fruits:", fruits.length);  // Output: 4

// // Add a new element to the array
// fruits.push("Pineapple");
// console.log("After adding a new fruit:", fruits);  // Output: ["Apple", "Banana", "Mango", "Orange", "Pineapple"]

// // Remove the last element from the array
// let removedFruit = fruits.pop();
// console.log("Removed fruit:", removedFruit);  // Output: Pineapple
// console.log("After removing a fruit:", fruits);  // Output: ["Apple", "Banana", "Mango", "Orange"]

// // Iterate through the array
// fruits.forEach(function(fruit, index) {
//     console.log(`Fruit at index ${index}:`, fruit);
// });

// #D
// let studentNames = new Array('Long', 'Phuoc', 'Quynh');
// console.log(studentNames);

// #E
let studentNames = new Array('Long', 'Phuoc', 'Quynh');
console.log(Array.isArray(studentNames));
console.log(Array.isArray({}));