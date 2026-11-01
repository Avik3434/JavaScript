const userEmail = "galactos@avik.ai"

if (userEmail) {
  console.log("Got user email")
}
else {
  console.log("Don't have user email")
}

// Falsy values
/*

false, 0, -0, null, undefined, BigInt 0n, "", NaN

*/

// truthy values
/*

"0", 'false', " ", [], {}, function (){}
 
*/

// Empty array checking

let arr = []

if (arr.length === 0) {
  console.log("Array is empty")
}

// Empty object checking

const obj = {}

if (Object.keys(obj).length === 0) {
  console.log("Object is empty")
}

// Nullish coalescing operator (??): null undefined

let value1;
// value1 = 200 ?? 100
// value1 = null ?? 10
// value1 = undefined ?? 20

value1 = null ?? 10 ?? 15

// if the left hand side value is null or undefined then the right hand sight value will be assigned

console.log(`Value inside value1 is ${value1}`)

// Ternary operator

//structure -> condition ? true : false

const teaPrice = 100

teaPrice >= 80? console.log("Higher than 80") : console.log("Less than 80")