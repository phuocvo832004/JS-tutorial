
// #B
// // Literal declaration
// let arr1 = [42, "hello", true, {name: "phuoc"}, [1, 2, 3], null];

// // With Array constructor
// let arr2 = new Array(42, "hello", true, {name: "phuoc"}, [1, 2, 3], null);

// #C

// Some common methods:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // map() - create a new array by doubling each number
// const doubledNumbers = numbers.map(num => num * 2);
// console.log("Doubled numbers:", doubledNumbers);

// // filter() - create a new array with only even numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log("Even numbers:", evenNumbers);

// // find() - find the first number greater than 5
// const firstNumberGreaterThanFive = numbers.find(num => num > 5);
// console.log("First number greater than 5:", firstNumberGreaterThanFive);

// reduce() - sum all the numbers in the array
// const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log("Sum of numbers:", sumOfNumbers);

// // Additional practice:
// // Let's use these methods on an array of objects
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
// ];

// // map() - create a new array of just user names
// const userNames = users.map(user => user.name);
// console.log("User names:", userNames);

// // filter() - get users who are older than 30
// const olderThan30 = users.filter(user => user.age > 30);
// console.log("Users older than 30:", olderThan30);

// // find() - find the first user who is exactly 30 years old
// const userWithAge30 = users.find(user => user.age === 30);
// console.log("First user who is 30:", userWithAge30);

// // reduce() - get the total age of all users
// const totalAge = users.reduce((acc, user) => acc + user.age, 0);
// console.log("Total age of users:", totalAge);

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
// let studentNames = new Array('Long', 'Phuoc', 'Quynh');
// console.log(Array.isArray(studentNames));
// console.log(Array.isArray({}));

// #F
// Fill array with given value, method fill
// const arr5 = new Array(5)
// console.log(arr5.fill(0)) 
// console.log(arr5.fill(1, 1)) 
// console.log(arr5.fill('phuoc', 2, 5)) 

// #G
// const matrix = new Array([1,2], [3,4,5], [6,7,8,9]);
// console.log(matrix)
// /* 
//   row 0 -->    [ [ 1, 2 ],
//   row 1 -->      [ 3, 4, 5 ],
//   row 2 -->      [ 6, 7, 8, 9 ] ]
//                    ^  ^  ^  ^
//                    |  |  |  |
//          column    0  1  2  3  
// */

// console.log(matrix[2][3]) // 9

// #H
// const screen1 = [255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255]
/*               ^            ^  ^            ^  ^            ^  ^            ^
                 |            |  |            |  |            |  |            |
                 |            |  |            |  |            |  |____________|
                 |            |  |            |  |            |        |
                 |            |  |            |  |____________|     4th pixel
                 |            |  |            |        |
                 |            |  |____________|     3rd pixel
                 |            |         |
                 |            |     2nd pixel, next 4 elements and so on...
                 |            | 
                 |____________| 
                       |
                   1st pixel, first 4 elements
*/


// 2x2 screen information represented by a 2x2x4 matrix
// const creen2x2x4 = [ [[255, 0, 0, 255], [255, 0, 0, 255]], 
//                      [[255, 0, 0, 255], [255, 0, 0, 255]] ] // 2x2x3 matrix
// console.log(creen2x2x4)
/*
  row 0 -->    [ [[255, 0, 0, 255], [255, 0, 0, 255]], 
  row 0 -->      [[255, 0, 0, 255], [255, 0, 0, 255]] ]
                  ^                 ^
                  |                 |
                  |                 |
                  |                 |
                  |                 column 1
                  column 0
*/
// access to pixel at row 0, column 0
// console.log(creen2x2x4[0][0]) // [ 255, 0, 0, 255 ]
/*
RED: 255
GREEN: 0
BLUE: 0
OPACITY: 255
=> this pixel display pure RED
*/

// #I
// const array2x2 = [
//         [1, 2],
//         [3, 4]
//     ];
//     console.log(array2x2[0][1]); 
//     console.log(array2x2[1][1]); 

// const array3x3 = [
//         [1, ['a', 'Duc Minh', 9], null],
//         [1, {key: 'value'}, 1],
//         [function() { return 'Hello Phuocdeptrai!'; }, 1, [true, false, true]]
//     ];
    
//     console.log(array3x3[0][1][1]); // 'Duc Minh'
//     console.log(array3x3[2][0]());  // Hello Phuocdeptrai!


// #J
// const array3x3 = [
//         [1, ['a', 'Duc Minh', 9], null],
//         [1, {key: 'value'}, 1],
//         [function() { return 'Hello Phuocdeptrai!'; }, 1, [true, false, true]]
//     ];
    
//     array3x3[0][1][1] = 'Mayka';
//     console.log(array3x3[0][1][1]); // 'Mayka'

//     array3x3[2][1] = 10 + 11;
//     console.log(array3x3[2][1]);  // 21