

// #A
// + Addition
// let x = 1 + 2
// console.log(x) // 3

// // - Subtraction
// let y = 3 - 1
// console.log(y) // 2

// //* Multiplication
// let z = 2 * 2
// console.log(z) // 4

// // / Division
// let w = 6 / 2
// console.log(w) // 3

// // ** Exponentiation
// let t = 3 ** 2
// console.log(t) // 9

// // % Modulus (Division Remainder)
// let a = 3 % 2
// console.log(a) // 1

// // ++ Increment
// let b = 1
// b++
// console.log(b) // 2

// // -- Decrement
// let c = 1
// c--
// console.log(c) // 0

// // Difference on using Increment and Decrement operators with
// // pre-fix and post-fix on function
// const print = x => console.log(x)
// let d = 2
// let e = 2

// // d is passed into function BEFORE incremented
// print(d++) // 2
// console.log(d) // 3

// // d is incremented BEFORE passed into function 
// print(++d) // 4
// console.log(d) // 4

// // e is passed into function BEFORE decremented
// print(e--) // 2
// console.log(e) // 1

// // e is decremented BEFORE passed into function 
// print(--e) // 0
// console.log(e) // 0


// #B
// Declare variable with assignment
// let x = 10;    // x = 10
// console.log(x);  // Output: 10

// // Declare variable with initial assignment
// const y = 7;
// console.log(y);  // Output: 7

// // Addition assignment
// x += 5;        // equivalent to x = x + 5
// console.log(x);  // Output: 15

// // Subtraction assignment
// x -= 3;        // equivalent to x = x - 3
// console.log(x);  // Output: 12

// // Multiplication assignment
// x *= 2;        // equivalent to x = x * 2
// console.log(x);  // Output: 24

// // Division assignment
// x /= 4;        // equivalent to x = x / 4
// console.log(x);  // Output: 6

// // Modulus assignment
// x %= 5;        // equivalent to x = x % 5
// console.log(x);  // Output: 1

// // Exponentiation assignment
// x **= 3;       // equivalent to x = x ** 3
// console.log(x);  // Output: 1 (since 1^3 = 1)


// #C
// Concatenation using +
// let x = 'abc' + 'd';  // Concatenate 'abc' with 'd'
// console.log(x);  // Output: 'abcd'

// // Concatenation using +=
// let y = 'abc';   
// y += 'd';        // Concatenate 'd' to y and assign back to y
// console.log(y);  // Output: 'abcd'


// #D
// Comparison Operators: == === != !== > < >= <=

// == "loose" equal (only value)
// console.log(2 == 2) // true
// console.log('2' == 2) // true

// // === "strict" equal (value and type)
// console.log(2 === 2) // true
// console.log('2' === 2) // false

// // != "loose" not equal (only value)
// console.log(1 != 2) // true
// console.log('2' != 2) // false

// // !== "strict" not equal (value and type)
// console.log(1 !== 2) // true
// console.log('2' !== 2) // true

// // > Greater than
// console.log(2 > 1) // true

// // < Less than
// console.log(1 < 2) // true

// // >= Greater than or equal to
// console.log(1 > 1) // false
// console.log(1 >= 1) // true

// // <= Less than or equal to
// console.log(1 < 1) // false
// console.log(1 <= 1) // true


// #E
// ? Ternery operator
// Ternery operator with assignment usage
// let x
// x = (1 > 2) ? 3 : 4
// console.log(x) // 4

// // Ternery  operator with expression usage
// let y
// (1 > 2) ? y = 3 : y = 4
// console.log(y) // 4


// // If shorthand with "&&" operator
// true && console.log('hello') // hello
// 1 < 2 && (y = 5)
// 1 > 2 && (y = 6)
// console.log(y) // 5


// #F
// Logical Operators: and &&, or ||, not !

// "&&" And 
// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false

// // "||" Or 
// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // false

// // "!" Not
// console.log(!true) // false
// console.log(!false) // true


// #G
// Get to know the type of your variable: operator `typeof`

// const myFunc = () => {}

// console.log(typeof 123) // number
// console.log(typeof 'abc') // string
// console.log(typeof true) // boolean
// console.log(typeof undefined) // undefined
// console.log(typeof myFunc) // function
// console.log(typeof {}) // object
// console.log(typeof []) // object, wrong, DO NOT use
// console.log(Array.isArray([])) // true, correct
// console.log(typeof null) // object, wrong DO NOT use

// // Check if a variable is an instance of a class or object function

// class Car {}
// function Supercar() {}

// const car1 = new Car()
// const car2 = new Supercar()
// console.log(car1 instanceof Car) // true
// console.log(car1 instanceof Supercar) // false
// console.log(car2 instanceof Supercar) // true


// #H
// const obj = {
//     a: 'b',
//     c: 1
//   }
//   console.log(delete obj.a) // true
//   console.log(obj) // { c: 1 }


// #I
const obj = {
    a: 'b',
    c: 1
  }
  console.log('a' in obj) // true
  console.log('d' in obj) // false



