
// #A
// Filter array values with given condition, method filter
const arr18 = ['a', 'd', 'c', ['k', 6], ['g', 0], ['h', 1]]
// console.log(arr18.filter((el) => typeof el === 'string')) // only return string element
// // [ 'a', 'd', 'c' ]
// console.log(arr18.filter((el) => Array.isArray(el))) // only return array element
// // [ [ 'k', 6 ], [ 'g', 0 ], [ 'h', 1 ] ]
// console.log(arr18.filter((el) => el[1] > 0)) // only return array element has second element greater than 0
// // [ [ 'k', 6 ], [ 'h', 1 ] ]

// // with additional bar variable
// const bar = 2
// const filtered = arr18.filter((el) => {
//   return Array.isArray(el) && el[1] >= bar // only return array element has second element greater than `bar`
// }, bar) 
// console.log(filtered) // [ [ 'k', 6 ] ]

// Another demo:
// const arr18B = ['hello', 'phuoc123', '2024', 'abc456', 'test', '789', 'no_digits'];

// console.log(arr18B.filter((el) => /\d+/.test(el)));

// console.log(arr18B.filter((el) => /\d{3}/.test(el)));

// console.log(arr18B.filter((el) => /^\d+$/.test(el)));

// console.log(arr18B.filter((el) => /^[a-zA-Z]+\d+$/.test(el)));


// #B
// Determines if the array contains a value, method includes
// const arr19 = [1,2,3, 'a', 'b', 'c']
// console.log(arr19.includes(1)) // true
// console.log(arr19.includes('a')) // true
// console.log(arr19.includes('a', 4)) // false, start comparing from index 4
// console.log(arr19.includes('d')) // false
// console.log(arr19) // [ 1, 2, 3, 'a', 'b', 'c' ], original array NOT modified


// #C
// Search the first index of a value in an array, method indexOf
// const arr20 = [1, 2, 3, 'a', 'b', 1, 'b']
// console.log(arr20.indexOf(1)) // 0
// console.log(arr20.indexOf('b')) // 4
// console.log(arr20.indexOf('b', 5)) // 6, start search from index 5
// console.log(arr20.indexOf('d')) // -1
// console.log(arr20) // [ 1, 2, 3, 'a', 'b', 1, 'b' ], original array NOT modified


// #D
// Search the last index of a value in an array, method lastIndexOf
// const arr21 = [1,2,3, 'a', 'b', 1, 'b']
// console.log(arr21.lastIndexOf(1)) // 5
// console.log(arr21.lastIndexOf('b')) // 6
// console.log(arr21.lastIndexOf('b', 5)) // 4, start search from index 5
// console.log(arr21.lastIndexOf('d')) // -1 because not found
// console.log(arr21) // khong thay doi mang goc


// #E
// Joins all elements of an array into a string, method join
// const arr22 = ['P', 'H', 'U', 'O', 'C']
// console.log(arr22.join()) // 'PHUOC'
// console.log(arr22.join('')) // 'PHUOC'
// console.log(arr22.join(' - ')) // P - H - U - O - C

// const temp = 10 + 11;
// console.log(arr22.join(temp + ' ')) // P21 H21 U21 O21 C (index: 0 -> n-1)


// #F
// Joins all elements of an array into a string, method join
// const arr23 = [1,2,3, 'a', 'b','c']
// console.log(arr23.slice()) // [ 1, 2, 3, 'a', 'b', 'c' ], same with original
// console.log(arr23.slice(2)) // [ 3, 'a', 'b', 'c' ]
// console.log(arr23.slice(2,4)) // [ 3, 'a' ]


// #G
// Joins all elements of an array into a string, method join
// const arr24 = [1,2,3]
// const extra = 1
// const squared = arr24.forEach((el) => {
//   console.log(el * el + extra)
// }, extra)
// // 2
// // 5
// // 10
// console.log(squared) // undefined
// console.log(arr24) // [ 1, 2, 3 ], original array NOT modified


// #H
// Mapping array to a new array, method map
// const arr25 = [['a', 1], ['b', 2], ['c', 3]]
// const year = 2020
// // this mapping creates a sentence for each element with name age information
// const p = arr25.map((el) => `The year is ${year} and '${el[0]}' is ${el[1]} year(s)old.`, year)
// console.log(p) // 
// // [
// //   "The year is 2020 and 'a' is 1 year(s)old.",
// //   "The year is 2020 and 'b' is 2 year(s)old.",
// //   "The year is 2020 and 'c' is 3 year(s)old."
// // ]
// console.log(arr25) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ], original array NOT modified


// #I
// Loop through all element and reduce, method reduce
// const arr26 = [1,2,3]
// const init = 4
// // this mapping creates a sentence for each element with name age information
// const r = arr26.reduce((acc, cur) => {
//   return acc + cur // return value here will be `acc` for next reduceFunction call
// }, 4)
// console.log(r) // 10


// #J
// Check if at least one element satisifies given condition, method some
const arr27 = [1,2,3]
console.log(arr27.some((el) => el > 2)) // true
console.log(arr27.some((el) => el < 0)) // false


