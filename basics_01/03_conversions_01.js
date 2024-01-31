//  Number
//  String
//  Boolean

let str = undefined
let convert_to_number = Number(str)
console.log(convert_to_number)
console.log(typeof(convert_to_number))

/*

CONVERSION TO NUMBER
1. "33" => 33
2. "33abc" => NaN
3. true => 1     false => 0
4. NaN => NaN
5. null => 0
6. undefined => NaN

*/


let num = undefined
let strnumber = String(num)
console.log(strnumber);
console.log(typeof(strnumber));

/*

1. 2809 => 2809 
2. true => true   false => false 
3. NaN => NaN
4. null => null
5. undefined => undefined

*/

let score = undefined
let booleanScore = Boolean(score)
console.log(booleanScore);
console.log(typeof booleanScore);

/*

1. 23 => true 
2. "23ankita" => true 
3. 1 => true   0 => false 
4. "" => false 
5. NaN => false 
6. null => false
7. undefined => false

*/