/*
1. For constant declarations(which shall NEVER CHANGE), always use 'const'
2. For variable declaration(which shall CHANGE LATER), use 'let' or 'var' or nothing.
*/

// Always use CONST, LET for declarations.
// Never use var or declare without any types.(We can but not a ideal practise) because of block scope and functional scope.
// If we declare a variable, but didn't define it meaning not assigned any value to it, so its UNDEFINED.

/*
1. Initially when js was invented it used to use VAR. Var is not block specific(ANYTHING WITHIN { }) which means anyone can change the variable 
   declared by var. It creates issues and nuiances. It's a very bad practise. We must keep everything const ideally but 
   this var used to change every variable definitions.
2. So, now VAR is not used anymore. Only LET is used for string or variable declarations.
*/


const account_id = 281809
let account_email = "ankita@google.com"
var account_password = "chalo@123"
account_city = "Jaipur"
let account_state;

// account_id = 829090193 // TypeError because it's a constant variable

account_email = "ankur@kiko.com"
account_password = "flyhigh909"
account_city = "Bengaluru"

// console.log(account_id)

console.table([account_id, account_email, account_password, account_city, account_state])

