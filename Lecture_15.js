

// #A

//Assign a function to a variable
// const demo = function() {  
//     console.log("Hello World!");  
// };  
// demo();

// //Pass a function as an Argument
// function testDemo(demo) {  
//     demo(); // Call the passed function  
// }  
// testDemo(demo); // Output: Hello World!

// //Return a function
// function makeCounter() {  
//     let count = 0;  
//     return function() {  
//         count++;  
//         console.log(count);  
//     };  
// }  
// const counter = makeCounter();  
// counter(); // Output: 1  
// counter(); // Output: 2  
// counter(); // Output: 3


// #B
// Object function used to create object blueprint
// function MySpecialDataStucture() {
//     console.log('running blueprint')
//     this.property1 = '123'
//     this.method1 = function() {
//       console.log('running method 1')
//     }
//   }
//   const specialDs = new MySpecialDataStucture() // running blueprint
//   console.log(specialDs) // MySpecialDataStucture { property1: '123', method1: [Function] }
//   console.log(specialDs.property1) // 123
//   specialDs.method1() // running method 1

  
  // #C
  // this keyword called within an object function refers itself
// function MySpecialDataStucture() {
//     console.log(this) // MySpecialDataStucture {}
//     this.property1 = '123'
//     console.log(this.property1) // 123
//     this.method1 = function() {
//       console.log('running method 1')
//     }
//     console.log(this) // MySpecialDataStucture { property1: '123', method1: [Function] }
//   }
//   const specialVariable1 = new MySpecialDataStucture()
  
//   // specialVariable1 is created based on a "MySpecialDataStucture" blueprint
//   // so it has everything defined in the blueprint
//   console.log(specialVariable1) // MySpecialDataStucture { property1: '123', method1: [Function] }
  
  
//   // we can create as many new object based on this blue print as wanted
//   const specialVariable2 = new MySpecialDataStucture()
//   console.log(specialVariable2) // MySpecialDataStucture { property1: '123', method1: [Function] }
  
  
// #D
// define an object blueprint "MyCustomDataStructure"
// function MyCustomDataStructure() {
//     this.property1 = 123
//     this.property2 = 'abc'
//     this.method1 = () => {
//       console.log('running method1')
//     }
//     this.method2 = () => {
//       console.log('running method2')
//     }
//   }
  
//   // you can create as many object based on blueprint as wanted
//   const customDs1 = new MyCustomDataStructure()
//   const customDs2 = new MyCustomDataStructure()
  
//   // they have the same property(ies) and method(s)
//   console.log(customDs1)

//   console.log(customDs2)


// #E
// With block statement {}
// const sum1 = () => {
//     console.log("tong cua 1+1 la: " + (1+1));
// };
// sum1();

// //Without block statement {}
// const sum = () => 1 + 1;
// console.log(sum());


// #G
// Global Scope
// let globalVar = "thí a global variable"; // This can be accessed anywhere

// function myFunction() {
//   // Function Scope
//   let functionVar = "this a function-scoped variable"; // This can only be accessed inside the function
  
//   console.log(globalVar);  // Accessing the global variable inside the function
//   console.log(functionVar); // Accessing the function-scoped variable
// }

// myFunction();

// console.log(globalVar);  // Accessing the global variable outside the function
// console.log(functionVar); // Error: functionVar is not defined outside the function


// #H
const person = {
    name: "Long",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  

  
  // // Without bind
  // const greetFunc = person.greet;
  // greetFunc(); // Output: Hello, my name is undefined (because "this" is lost)
  
  // // With bind
  // const greetBob = person.greet.bind(anotherName);
  // greetBob(); // Output: Hello, my name is Minh

  
  // Call()
  // const anotherName = {
  //   name: "Minh"
  // };

  // function greet(greeting, others) {
  //   console.log(greeting + ', ' + this.name + others);
  // }
  // greet.call(anotherName, 'Hello', '!'); 


  //Aplly()
  // const person2 = { name: 'Quang' };

  // function greet(greeting, other) {
  //   console.log(greeting + ', ' + this.name + other);
  // }
  // greet.apply(person2, ['Hi', '.']); 
  
  
  

 
