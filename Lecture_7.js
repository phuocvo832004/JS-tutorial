// #A 
let text = "The quick brown fox jumps over the lazy dog. The fox is quickly and clever.~!!!";

// // Match
// console.log(text.match(/\b(quic|laz)\w*\b/g)); // match full word of 'laz' or 'quic'

// console.log(text.match(/\b\w+y\b/g)); // match all words end with 'y'

// matchAll 
// let matchAll = text.matchAll(/\b(quic|laz)\w*\b/g); // get all words start with 'q' or 'l'

// for (let match of matchAll) {
//     console.log(match); // prints match arrays ['quickly', 'lazy']
// }

// Replace 
// console.log(text.replace(/fox/g, 'cat')); 

// console.log(text.replace(/\bf\w*x\b/g, 'Phuoc?')); 

// console.log(text.replace(/\b\w+ly\b/g, 'fish')); 

// // Search 
// console.log("index: " + text.search(/jumps/)); 

// console.log("In case no founded, index: " + text.search(/phuoc/)); 


// // Exec 
// let execResult = /\b\w+y\b/.exec(text);
// console.log(execResult);

// // Test
// let testResult = /clever/.test(text);
// console.log(testResult); 


