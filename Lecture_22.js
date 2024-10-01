

// #A
// Exception 
// Example 1:
// let arr = new Array(-1); // RangeError: Invalid array length

// Example 2:
// console.log(a); // ReferenceError: a is not defined

// Use `throw` to log error in console
// const arr = [1,2,3,4,5]
// const getElementAt = (index) => {
//     if(index < 0 || index >= arr.length){
//         throw new Error(`Index ${index} is out of array with length ${arr.length}`);
//     }
// }

// getElementAt(6)


// #B
// function checkNumber(num) {
//     if (typeof num !== 'number') {
//         throw new Error("Invalid input: Not a number");
//     }
//     return num;
// }

// try {
//     let result = checkNumber("abc");
//     console.log(result);
// } catch (error) {
//     console.error("Caught an error:", error.message);
// }


// #C
// const promise = new Promise((resolve, reject) => {
//     reject('fetch khong thanh cong...')
// });

// promise.catch(error => {
//     console.log('Error: ' + error)
// })
// console.log('program continue to run without crashing')


// #D
async function fetchData() {
    try {
        let response = await fetch('https://png.pngtree.com/png-clipart/20190516/original/pngtree-cartoon-hand-painted-dolphins-cute-dolphin-little-dolphin-png-image_3821858.jpg');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.blob();
        console.log(data)
    } catch (error) {
        console.error('Fetch error:', error.message); // Handle the error
    }
}

fetchData();
