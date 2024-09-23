
// #A 
// An object named 'student'
// let student1 = {
//     name: "Phuoc",
//     age: 20
// };

// let student2 = {
//     name: "Long",
//     age: 21
// };

// // An object named 'classroom'
// let classroom = {
//     classA : [{name: "Mimh"}, {name: "Quang"} ],
//     classB : [student1, student2, {} ]
// }  

// console.log(classroom)


// #B
// let cat = {

//     // Properties - characteristics of the cat
//     name: "heo",
//     color: "orange",
//     age: 3,
//     hasClaws: true,
//     sound: "meow",
    
//     // Methods - Actions that the cat can perfor
//     makeSound: function() {
//         console.log("The cat says " + this.sound);
//     },
//     sleep: function() {
//         console.log("zzzzz");
//     }
// };


// #C
// Get properties of the object 'cat'
// console.log(cat.name); // heo
// console.log(cat.color); // orange

// // Run methods of the object 'cat'
// cat.makeSound(); // The cat says meow
// cat.sleep(); // The cat is sleeping


// #D
// const car4 = {
//     name: 'Bumblebee',
//     honk: () => console.log(`it's Bumblebee`)
//   }
  
//   // Update object property
//   car4.name = 'Optimus Prime'
//   console.log(car4) // { name: 'Optimus Prime' }
  
//   // Update object method
//   car4.honk = () => console.log(`it's Optimus Prime`)
//   car4.honk() // it's Optimus Prime
  
//   // Add new object property
//   car4.heightFeet = 4
//   console.log(car4) // { name: 'Optimus Prime', honk: [Function], heightFeet: 4 }
  
//   // Add new object method
//   car4.transform = () => console.log(`blink, I've turned to humanoid form`)
//   car4.transform() // blink, I've turned to humanoid form


// #E
// const car5 = {
//     name: 'Bumblebee',
//     honk: () => console.log(`it's` + car5.name)
//   }
  
//   // delete object property
//   console.log(car5) // { name: 'Bumblebee', honk: [Function: honk] }
//   console.log(delete car5.name) // true, return true if successful
//   console.log(car5) // { honk: [Function: honk] }
  
//   // delete object method
//   console.log(delete car5.honk) // true
//   console.log(car5) // {}, empty object


// #F
//Use `in` operator
// const student = { name: 'Phuoc', age: 21 };

// console.log('name' in student); // true
// console.log('gender' in student); // false

//Use hasOwnProperty() method
// const student = { name: 'Phuoc', age: 21 };

// console.log(student.hasOwnProperty('name')); // true
// console.log(student.hasOwnProperty('school')); // false


// #G
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     speed: 0,
    
//     accelerate: function() {
//         this.speed += 10;
//         return this; // Returns the object itself so the following methods can call
//     },
    
//     brake: function() {
//         this.speed -= 5;
//         return this;
//     },
    
//     showSpeed: function() {
//         console.log("Tốc độ hiện tại: " + this.speed + " km/h");
//         return this;
//     }
// };

// // Ví dụ method chaining
// car.accelerate().accelerate().brake().showSpeed(); // Current speed: 15 km/h


// #I
// Convert object to string, JSON.stringify()
// const car8 = {
//     name: 'Bumblebee',
//     age: 201,
//   }
//   console.log(JSON.stringify(car8)) // '{"name":"Bumblebee","age":201}'
//   console.log(car8.toString()) // [object Object], wrong! do not use


// #J
// Convert object to string, JSON.stringify()
// const strObject = '{"name":"Bumblebee","age":201}'
// const convertedStr = JSON.parse(strObject)
// console.log(convertedStr) // { name: 'Bumblebee', age: 201 }

// const student = '{"name":"Phuoc","age":20, hobby, height}'
// const convertedStr = JSON.parse(student)
// console.log(convertedStr)

