
// #A
// const studentNames = ['long', 'minh', 'phuoc', 'trang', 'hehe'];
// console.log(studentNames.length) // 5

// #B
// Empty array is different from sparse array
// console.log([]) // [], empty array
// console.log([].length) // 0, empty array length 0
// console.log([,,,]) // [ <3 empty items> ], sparse array, empty element
// console.log([,,,].length) // 3, sparse array length 3

// #C
// // Removes the last element from an array, method pop
// const arr8 = [2,3,'abc']
// console.log(arr8.pop()) // remove 'abc' from the array
// console.log(arr8) // [ 2, 3 ], original array modified

// #D
// // Removes the last element from an array, method pop
// const arr8 = [2,3,'abc']
// console.log(arr8.shift()) // remove 2 from the array
// console.log(arr8) // [3, 'abc' ], original array modified

// #E
// Adds element(s) to the end of an array, method push
// const arr10 = [1, 'b', 3]
// console.log(arr10.push(4)) // 4, 'pushed' element
// console.log(arr10) // [ 1, 'b', 3, 4 ], original array modified
// console.log(arr10.push(5,6)) // 6, last 'pushed' element
// console.log(arr10) // [ 1, 'b', 3, 4, 5, 6 ], original array modified

// #F
// Adds element(s) to the beginning of an array, method unshift
// const arr101 = [1, 'b', 3]
// console.log(arr101.unshift(4)) // 4, 'unshifted' element
// console.log(arr101) // [ 4, 1, 'b', 3 ], original array modified
// console.log(arr101.unshift(5,6)) // 6, last 'unshifted' element
// console.log(arr101) // [ 5, 6, 4, 1, 'b', 3 ], original array modified

// #G
// // Adds and/or removes elements from an array, method splice
// const arr11 = [1,2,3,4,5]
// console.log(arr11.splice(1)) // [ 2, 3, 4, 5 ], removed elements
// console.log(arr11) // [ 1 ], modified original array

// const arr12 = [1,2,3,4,5]
// console.log(arr12.splice(1,2)) // [ 2, 3 ], removed elements
// console.log(arr12) // [ 1, 4, 5 ], modified original array

// const arr13 = [1,2,3,4,5]
// console.log(arr13.splice(1,2, 'a', 'b', 'c')) // [ 2, 3 ], removed elements
// console.log(arr13) // [ 1, 'a', 'b', 'c', 4, 5 ], modified original array


// #H
// Sorts the elements of an array, method sort
// const arr14 = [4,3,9,7]
// console.log(arr14.sort()) // [ 3, 4, 7, 9 ], sorted array
// console.log(arr14) // [ 3, 4, 7, 9 ], original array modified

// const arr15 = [['c', 5], ['b', 4], ['a', 7]]
// console.log(arr15.sort((a,b) => a[1] - b[1]))
// // sort by the number
// // [ [ 'b', 4 ], [ 'c', 5 ], [ 'a', 7 ] ]

// console.log(arr15.sort((a,b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)))
// // sort by the character
// // [ [ 'a', 7 ], [ 'b', 4 ], [ 'c', 5 ] ]


// #I
// Reverses the order of the elements of an array, method reverse
// const arr16 = [1, 2, 3, 4, 5, 6]
// console.log(arr16.reverse()) 


// #J
// Concatenate array with other array(s) and/or value(s), method concat
// const arr17 = [1,2]
// console.log(arr17.concat([4,5], [6], 7)) // [ 1, 2, 4, 5, 6, 7 ]
// console.log(arr17.concat('a', 'b')) // [ 1, 2, 'a', 'b' ]
// console.log(arr17.concat('c')) // [ 1, 2, 'c' ]
// console.log(arr17) // [ 1, 2 ], original array NOT modified

