

// #B
// const getUser = async () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({ name: 'Superman', superpower: 'fly'})
//       }, 1000);
//     })
//   }
  
//   module.exports = { // export syntax
//     API_KEY: '123-456',
//     getUser
//   }

// #C
// const { API_KEY, getUser } = require('./Lecture_23') // destructure while importing a module
// const wholeModule = require('./Lecture_23') // import whole module, ".js" part is optional

// ;(async () => { // a self-invoking async function
//   const user1 = await getUser() 
//   const user2 = await wholeModule.getUser()
//   console.log('user1:', user1)
//   console.log('user2:', user2)
// })()

// console.log('API_KEY:', API_KEY)
// console.log('API_KEY:', wholeModule.API_KEY)


// #D
// Package (export) your code with ES Module syntax

// const getUser = async () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({ name: 'Superman', superpower: 'fly'})
//       }, 1000);
//     })
//   }
  
//   export const API_KEY = '123-456' // import needs to destructure to get this constant
  
//   export default getUser // default object recieved when import


// #E
// Reuse (import) your code with ES Module syntax

 // ".js" is required for Node ES Module
 import { API_KEY } from './export.js' // destructured import for non-default exported object
 import { API_KEY as key } from './export.js' // destructured import and rename
 import getUser from './export.js' // import default exported object
 import * as wholeModule from './export.js' // import everything and rename as "wholeModule"


