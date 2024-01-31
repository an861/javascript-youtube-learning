// If Comparison operations are done between similar datatypes then it's fine else it's and issue
// ALWAYS COMPARISON SHOULD BE DONE BETWEEN OPERATORS OF SIMILAR DATATYPE

// console.log(2==2)
// console.log(2>2)
// console.log(2<2)
// console.log(2>=2)
// console.log(2<=2)
// console.log(2!=2)


// EQUALITY CHECK AND COMPARISON OPEARTORS WORK DIFFERENTLY
// Comparison operation will convert the operator and perform the comparison
// Equality check will not convert the operator


console.log(2 == "2")   //true as only value check
console.log(2 === "2")  //false as both value and type check


console.log("2" > 1) // true
console.log("02" > 1) // true

// ************ DO NOT USE THE BELOW TYPES OF COMPARISON AS IT IS NOT IDEAL AND NOT ACLEAN CODE ****************

// console.log(null > 0)   //false , here null is converted to number as 0
// console.log(null == 0)  //false
// console.log(null >= 0)  //true , here null is converted to number as 0

// console.log(undefined > 0)   // false
// console.log(undefined < 0)   // false
// console.log(undefined == 0)  // false