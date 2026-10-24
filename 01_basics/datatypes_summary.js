// Primitive datatypes

// 7 Types: String, number, boolean, null, undefined, symbol, bigint

let score = 100
let scoreValue = 100.3

const isLoggedIn = false
const isOutsideTemp = null

let userEmail;

const id = Symbol('123')
const userId = Symbol('123')

const bigNumber = 3912348976235n

// console.log(id == userId)

//Reference datatypes (Non-primitive)

// Array, objects, functions,


const blocks = ["dirt", "stone", "wood", "sand"]

// console.log(typeof blocks)

// Objects

let user = {
    name: "Avik Mukherjee",
    age: 12,
    address: "Kolkata"
}

// console.log(user.name)
// console.log(user.age)
// console.log(user.address)

// Functions

let name = user.name;

// Functions creation and calling

const greet = function(name){
    console.log("Hello", name);
}

const myFunction = function(){
    console.log("Hello world");
}

// greet(name)
// myFunction()

// console.log(typeof greet)

/*
Return type of variables in JavaScript

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


// =======================================================================================

//Memory: Stack (Primitive) and heap (Non-Primitive)

let githubName = "Avik3434"
let userName = githubName

userName = "AvikMukherjee"

// console.table([githubName, userName])

// console.log(githubName)
// console.log(userName)

let employee1 = {
    email: "employee1@gmail.com",
    name: "Employee1",
    id: 1,
    upi: "employee1@ybl"
}

let employee2 = {
    email: "employee2@gmail.com",
    name: "Employee2",
    id: 2,
    upi: "employee2@ybl"
}

let currentEmplyee = employee1
currentEmplyee.email = "john@gmail.com"

console.log(employee1.email)
console.log(currentEmplyee.email)