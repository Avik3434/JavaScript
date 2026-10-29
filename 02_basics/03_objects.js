// singleton

// object literals
const mySymbol = Symbol("124")

const jsUser = {
    name: "Avik",
    "full_name": "Avik Mukherjee",
    [mySymbol]: "MyKey1",
    age: 20,
    location: "Kolkata",
    email: "avikmukherjee@gmail.com",
    isLoggedIn: false,
    lastLoginDays: [
        "Monday",
        "Tuesday",
        "Friday"
    ]
}


// console.log(jsUser.isLoggedIn); // not a good practice
// console.log(jsUser["isLoggedIn"]); // good way to access key value from an object

// console.log(jsUser["full_name"])
// console.log(jsUser[mySymbol]);

jsUser["name"]= "Thor odinson"

// console.log(jsUser.name);
// console.log(jsUser);
// Object.freeze(jsUser) // freezes the object and doesn't allow any upcoming changes

jsUser.greetings = function(){
    console.log(`Hello Js user`);
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(jsUser.greetings())
console.log(jsUser.greetingTwo())