

// #A
// function* createGenerator() {
//     // do something in phase 1
//     yield new Promise((resolve, reject) => {resolve(3)});
//     // do something in phase 2
//     yield new Promise((resolve, reject) => {resolve(4)});
//     // do something in phase 3
//     yield new Promise((resolve, reject) => {resolve(5)});
//     // in final yield, log 'final'
//     console.log('final')
//     return 'final'

//   }
//   const generator = createGenerator()
//   console.log(generator.next())
//   console.log(generator.next())
//   console.log(generator.next())
//   console.log(generator.next())  


  // #B
  // Use generator object to control to pause and continue Generator function
//   function* exampleGenerator() {
//     try {
//         const step1 = yield 'Step 1: Initialization...';
//         console.log(step1);  

//         const step2 = yield 'Step 2: Processing...';
//         console.log(step2);  
//         const step3 = yield 'Step 3: Finalizing...';
//         console.log(step3); 

//         return 'Completed';
//     } catch (error) {
//         console.log('Error caught inside generator:', error);
//     }
// }

// const generator = exampleGenerator();

// console.log(generator.next());         // { value: 'Step 1: Initialization...', done: false }
// console.log(generator.next('Data 1')); // { value: 'Step 2: Processing...', done: false }, in ra 'Data 1'
// console.log(generator.next('Data 2')); // { value: 'Step 3: Finalizing...', done: false }, in ra 'Data 2'

// // Sử dụng throw() để ném lỗi vào generator
// console.log(generator.throw('Something went wrong!')); 

// const generator2 = exampleGenerator();
// console.log(generator2.next());         // { value: 'Step 1: Initialization...', done: false }
// console.log(generator2.next('Data A')); // { value: 'Step 2: Processing...', done: false }

// // Sử dụng return() để kết thúc generator sớm
// console.log(generator2.return('Early exit!'));  // { value: 'Early exit!', done: true }

// // Kiểm tra xem generator đã kết thúc chưa
// console.log(generator2.next());  // { value: undefined, done: true } => finished


// // #C
// // function to check if prime
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// // High-order function: find prime number in array
// function filterArray(arr, predicate) {
//     const result = [];
//     for (let element of arr) {
//         if (predicate(element)) {
//             result.push(element);
//         }
//     }
//     return result;
// }

// // test array
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17];

// // Use the above function_
// const primeNumbers = filterArray(numbers, isPrime);
// console.log(primeNumbers);  // [2, 3, 5, 7, 11, 13, 17]


// #D
// The "arguments" object in function holds all of its arguments
// function printAllArguments(a, b, c, d) {
//     console.log(arguments) // (i) [Arguments] {'index': value,...}
//     console.log(arguments[0]) // (ii)
//     console.log(arguments[1]) // (iii)
//     console.log(arguments[2]) // (iv)
//     console.log(arguments.length) // (v)
//     console.log(a,b,c) // (vi)
//   }
  
//   printAllArguments(1,2,3, 'd')
//   // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 'd' }, (i)
//   // 1, (ii)
//   // 2, (ii)
//   // 3, (iv)
//   // 4, (v)
//   // 1 2 3, (vi)


// #E
// Example 1:
// spread array to list of arguments: ...array
// const arr = [1,2,3, 'd']
// console.log(arr) // [ 1, 2, 3, 'd' ]
// console.log(...arr) // just elements in the array, remove [ ]

// Example 2:
// const arr = [1,2,3, 'd']
// const arr2 = [...arr, 'a', 'b']
// console.log(arr2) // [ 1, 2, 3, 'd', 'a', 'b' ]

// function print(a, b, c, d) {
//   console.log(d)
// }
// print(...arr) // d

// Example 3:
// spread string, ...string
// const str = 'abc'
// console.log(...str) // a b c
// equals to: console.log(str[0], str[1], str[2])

// Example 4:
// spread object, ...object
// const obj = {
//     a: 'b',
//     c: 1
//   }
//   const obj2 = {
//     ...obj, // spread syntax
//     d: 2
//   }
//   console.log(obj2) // { a: 'b', c: 1, d: 2 }


// #E
// Destructuring array
// Example 1:
// const arr = [1, 2, 3];

// const [a, b, c] = arr;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// Example 2:
// const arr = [1,2,3,'a']

// const [,val1,, val3] = arr 
// console.log(val1) // 2
// console.log(val3) // a

// Destructuring Objects
// object person
// const person = {
//     name: 'phuoc',
//     age: 20,
//     city: 'Hue'
//   };
  
//   // destructuring and assign variable the same names with object key
//   const { name, age, city } = person; 
//   console.log(name); // phuoc
//   console.log(age);  // 20
//   console.log(city); // Hue
  
//   // destructuring and assign variable the DIFFERENT names with object key
//   const { name: personName, age: personAge } = person;
  
//   console.log(personName); // phuoc
//   console.log(personAge);  // 20


// #F
// function print(a = 1, b = false, c = 'abc') {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//   }
  
//   print() // no argument present will use default values
//   // 1
//   // false
//   // abc
  
//   print(2,2,2) // no default value used
  // 2
  // 2
  // 2


// #G
function print({ a: val1 = 1, b: val2 = {}, c: val3 = false } = {}) {
  console.log(val1);
  console.log(val2);
  console.log(val3);
}

// Test cases
print(); // Sử dụng toàn bộ giá trị mặc định
// 1
// {}
// false

print({ a: 3, b: { d: 'f'}, c: true }); // Không sử dụng giá trị mặc định
// 3
// { d: 'f' }
// true

print(null); // Sử dụng toàn bộ giá trị mặc định vì null không phải là object
// 1
// {}
// false

print(undefined); // Sử dụng toàn bộ giá trị mặc định
// 1
// {}
// false




  
