// PRIMITIVE (CALL BY VALUE)
Number, String, Boolean, Symbol, BigInt, null, undefined

const num = 28
let str = "ankita"
let isLoggedIn = true
let myBigInt = 67927030810867890378900045799n
let symbol1 =  Symbol('123')
let symbol2 =  Symbol('123')
let mynull = null
let state;

// console.log(symbol1 == symbol2)  // false
// console.log(symbol1 === symbol2) // false

// console.log(typeof mynull) // object


// NON-PRIMITIVE (CALL BY REFERENCE)

Array, Object, Function

let myarray = ["appple", "banana", "plum"]
let myobject = {
    "name" : "Ankita",
    "age" : 25,
    "is_employee" : true
}
let myfunction = function(){
    console.log("Hello World")
}

// console.log(myarray)
// console.log(myobject)
// console.log(myfunction)   // [Function: myfunction]

// console.log(typeof myarray)     // object
// console.log(typeof myobject)    // object
// console.log(typeof myfunction)  // function



// The datatypes are in Pascal Case but the return types are in small case