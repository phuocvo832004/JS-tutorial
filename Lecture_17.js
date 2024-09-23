

// #B
// asynchronous function
// console.log('1st line') // 1st line
// const username = 'username'
// const password = 'password'

// function login(username, password) {
//   setTimeout(() => {
//     console.log('login success with credentials:', username, password)
//   }, 1500) // we emulate login result returns after 1.5 second
// }

// login(username, password)
// console.log('last line')

// 1st line
// last line (does not wait for function login() to finish)
// login success with credentials: username password


// #C
// A basic example
// function fetchData(callback) {
//     setTimeout(() => {
//       console.log("time out...");
//       callback();
//     }, 1000);
//   }
//   fetchData(() => console.log("Callback executed"));

// An advance example
// use callback functions to handle post asynchronous operation
// (after login)
// console.log('1st line')
// const username = 'myusername'
// const password = 'myPassword'

// const successCallback = () => { // a callback function
//   console.log('login success, I am doing the next thing')
// }

// const failureCallback = () => { // a callback function
//   console.log('login failed, reporting failure')
// }


// function login(username, password, successCb, failureCb) {
//   setTimeout(() => {
//     console.log('credentials:', username, password)
//     let ok = true // we assumme login success
//     if(ok) {
//       successCb() // call success cb when login success
//     } else {
//       failureCb() // call failure cb if login failed
//     }
//   }, 1500) // we emulate login result returns after 1.5 second
// }

// login(username, password, successCallback, failureCallback)
// console.log('last line')

// 1st line
// last line
// credentials: myusername myPassword
// login success, I am doing the next thing


// Remember when use callback function

// Use typeof to validate:
// function createPassword(callback){
//     if(typeof callback !== 'function'){
//         console.log('The input must be a function!');
//         return false;
//     }
//     else{
//         console.log('Create pass successfully!');
//     }
// }
// createPassword(()=>{console.log('validating password...')}); //Create pass successfully!
// createPassword('validating password...'); //The input must be a function!


// var person = {
//     name: 'Nam',
//     setName : function (name) {
//         this.name = name;
//     }
// }
// // callback function
// function test(callback) {
//     callback('Nguyen Van Nam');
// }
// test(person.setName);

// console.log(person.name) // Nam

// fix the `this` to refers to callback object in input
// var person = {
//     name: 'Nam',
//     setName : function (name) {
//         this.name = name;
//     }
// }

// // use apply() so 'this' refers to callbackObject
// function test(callback, callbackObject) {
//     callback.apply(callbackObject, ['Nguyen Van Nam']);
// }
// test(person.setName, person);

// //Outpput: Nguyen Van Nam
// console.log(person.name);


// #D
// Create a Promise
// const myPromise = new Promise((resolve, reject) => {
//     let success = true; 
//     setTimeout(() => {
//       if (success) {
//         resolve('Dữ liệu đã tải xong!');
//       } else {
//         reject('Đã xảy ra lỗi trong khi tải dữ liệu.');
//       }
//     }, 2000); // Simulating an asynchronous operation takes 2s
//   });
  
// // Using the Promise
//   myPromise
//     .then((result) => {
//       console.log(result); // "fetch data successfully!"
//     })
//     .catch((error) => {
//       console.error(error); // "error when fetching"
//     })
//     .finally(() => {
//       console.log('Hoàn tất thao tác.');
//     });
 

// Promise chaining:
// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000); // Wait 1 second, then return 1
//   })
//     .then((result) => {
//       console.log(result); // 1
//       return result * 2; // Returns the value for the next `then` call
//     })
//     .then((result) => {
//       console.log(result); // 2
//       return result * 2;
//     })
//     .then((result) => {
//       console.log(result); // 4
//     });


// promise.all():
// const promise1 = Promise.resolve('phuoc');
// const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'hello'));
// const promise3 = fetch('https://jsonplaceholder.typicode.com/posts/12').then(response => response.json());

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results); 
//   })
//   .catch((error) => {
//     console.error('Có lỗi:', error);
//   });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise hoàn thành sau 2 giây');
//     }, 2000);
//   });

//   promise.then((value)=>{
//     console.log(value)
//   })

// promise.race():
// (.race() will return the promise that settles first, whether it is resolved or rejected)
// const promise1 = Promise.resolve('phuoc');
// const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'hello'));
// const promise3 = fetch('https://jsonplaceholder.typicode.com/posts/12').then(response => response.json());

// Promise.race([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results); 
//   })
//   .catch((error) => {
//     console.error('Có lỗi:', error);
//   });
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise.race() hoàn thành sau 2 giây');
//     }, 2000);
//   });

//   promise.then((value)=>{
//     console.log(value)
//   })

// async function:
// async function test(num) {
//     return num = 10;
// } 
// count(30).then((data) => {console.log(data)})


// await operator:
// async function myFunction() {
//     const result = await new Promise((resolve, reject) => {
//       setTimeout(() => resolve('Đã xong sau 2 giây!'), 2000);
//     });
//     console.log(result); // Kết quả: "Đã xong sau 2 giây!"
//   }
  
//   myFunction();
  

// async/await together:
// Example 1:
// function fetchData() {
//     // return new Promise((resolve, reject) => {
//     //   setTimeout(() => resolve('Dữ liệu đã tải xong!'), 1000);
//     // });
//     return promise3 = fetch('https://jsonplacehold()er.typicode.com/posts/12').then(response => response.json());
//   }
  
//   // function process() {
//   //   fetchData()
//   //     .then(data => {
//   //       console.log(data); 
//   //     })
//   //     .catch(error => {
//   //       console.error('Đã xảy ra lỗi:', error);
//   //     });
//   // }
//   // process(); 

//   async function process() {
//     const data = await fetchData();
//     console.log(data);
//   }
  
//   process(); 
  

// Example 2:
// Use .all() inside the async function:
// async function fetchData() {
//   const promise1 = new Promise((resolve) => setTimeout(() => resolve('Data 1'), 1000));
//   const promise2 = new Promise((resolve) => setTimeout(() => resolve('Data 2'), 2000));
//   const promise3 = new Promise((resolve) => setTimeout(() => resolve('Data 3'), 3000));

//   try {
//     const results = await Promise.all([promise1, promise2, promise3]);
//     console.log(results);  // ['Data 1', 'Data 2', 'Data 3']
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// fetchData();

// Use .race() insdie the async function:
// async function fetchData() {
//   const promise1 = new Promise((resolve) => setTimeout(() => resolve('Data 1'), 1000));
//   const promise2 = new Promise((resolve) => setTimeout(() => resolve('Data 2'), 2000));
//   const promise3 = new Promise((resolve) => setTimeout(() => resolve('Data 3'), 3000));

//   try {
//     const result = await Promise.race([promise1, promise2, promise3]);
//     console.log(result);  // 'Data 1' (promise1 was resolved first)
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchData();






