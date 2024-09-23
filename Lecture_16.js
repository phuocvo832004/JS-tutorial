

// #A
// function sayHello() {
//     var say = function() { console.log(hello); }
//     // Local variable that ends up within the closure 
//     var hello = 'Hello, world!';
//     return say;
//   }
//   var sayHelloClosure = sayHello(); 
//   sayHelloClosure(); // ‘Hello, world!’
  

  // #B
  //Shared data between runs.
  // function createCounter() {
  //   let count = 0; // Shared data 
  
  //   return function() {
  //     count++; // Every time this inner function is called, it will use the same 'count' data
  //     console.log(count);
  //   };
  // }
  
  // const counter = createCounter();
  
  // counter(); // Output: 1
  // counter(); // Output: 2
  // counter(); // Output: 3

  // //Shared data is encapsulated in one single function.
  // function createPerson(name) {
  //   // Dữ liệu 'name' được đóng gói trong hàm createPerson
  //   return {
  //     getName: function() {
  //       return name; // Hàm trả về có thể truy cập dữ liệu 'name'
  //     },
  //     setName: function(newName) {
  //       name = newName; // Hàm này có thể cập nhật dữ liệu 'name'
  //     }
  //   };
  // }
  
  // const person = createPerson("John");
  
  // console.log(person.getName()); // Output: John
  // person.setName("Alice");
  // console.log(person.getName()); // Output: Alice
  
  
  // #C
  // setTimeout()to run a function after specified time

// const printAfter500ms = () => {
//     console.log('this message is printed after 500 ms')
//   }
  
//   setTimeout(printAfter500ms, 500)
//   setTimeout(() => console.log('this message is printed after 100 ms'), 100)
  
//   // this message is printed after 100 ms
//   // this message is printed after 500 ms


// #D
// Input: 
// User's search query input (`query`), provided each time the user types in the search bar.
// A new search query string is passed into the `getSuggestion()` function.

// Process: 
// The function uses `setTimeout` to delay the request for search suggestions by 1 second after the last keystroke.
// If the user keeps typing before 1 second, the timer is reset (debounce behavior).
// The function checks if the current query matches the previous one (`lastQuery`). If they are the same, no new request is made.
// If the queries are different, the last query is updated, and after 1 second of inactivity, a request for search suggestions is simulated (or would be made to a server in a real-world scenario).

// Output: 
// If the query has changed after 1 second of inactivity, a search suggestion request is triggered, and a message is logged to the console: "Fetching suggestions for: <query>".
// If the query remains the same, the function logs "Same query, no need to fetch.", and no request is made.

function createSearchSuggestion() {  
  let timer; // The state of the timer is stored in a closure  
  let lastQuery = ''; // The previous query data, shared between runs  

  return function(query) {  
    clearTimeout(timer); // Clear the previous timer if the user is still typing  

    if (query === lastQuery) {  
      // If the keyword hasn't changed, there's no need to send a new request  
      console.log("Same query, no need to fetch.");  
      return;  
    }  

    timer = setTimeout(() => {  
      console.log("Fetching suggestions for: " + query);  
      lastQuery = query; // Update the current search keyword  
      // Send a request to the server to get suggestions  
    }, 1000); // Only send the request after stopping typing for 1 second  
  };  
}  

const getSuggestion = createSearchSuggestion();  


// #E
// Javascript closure example: memoization

const createGetCodeAndCache = () => { // outer function
  const cache = {} // closure data

  const get = (input) => { // inner function
    console.log(cache) // print cache before each run
    if(cache[input]) { // use cache if available
      console.log('cached output')
      return cache[input]
    } else { // compute if no cache available
      console.log('new input')
      const result = input.charCodeAt(0)
      cache[input] = result // put data to cache
      return result
    }
  }

  return get
}

const getCodeAndCache = createGetCodeAndCache()

console.log(getCodeAndCache('a'))
// {}, empty cache
// new input
// 97

console.log(getCodeAndCache('b'))
// { a: 97 }, cached 'a'
// new input
// 98

console.log(getCodeAndCache('a')) // "seen" input
// { a: 97, b: 98 }, cached 'a' and 'b'
// cached output
// 97

