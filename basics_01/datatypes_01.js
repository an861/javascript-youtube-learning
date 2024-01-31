"use strict";  // it is written to ensure and inform that all new versions of js are used

// alert("hello") // ReferenceError beacuse we are using nodejs here and not browser

// console.log(3+3) console.log("checking") // This is giving error as ; is not used.It's not mandate to use ' everywhere but sometimes for code readibility we need to use ;

/*
PRIMITIVE DATATYPES
1. Number => range is upto 2^53
2. String => ""
3. boolean => true/false
4. BigInt 
5. Symbol => unique
6. null => standalone value
7. undefined => variable decalred but not defined or not assigned any value


NON-PRIMITIVE DATATYPES
1. Object
*/

const id = 28
let age = 25
let profession = "Engineer"
let state_1 = null
let state_2

console.table([id, age, profession, state_1, state_2])

console.log(typeof 6)
console.log(typeof "ankita")
console.log(typeof false)

console.log(typeof state_1) // object
console.log(typeof state_2) //undefined