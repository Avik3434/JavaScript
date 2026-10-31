const user = {
  userName: "Avik",
  price: 999,
  id: "123abc",
  websiteName: "Youtube",
  welcomeMessege: function () {
    console.log(`${this.userName}, welcome to ${this.websiteName}`)
    // console.log(this)
  }
}

user.welcomeMessege()
user.userName = "Thor"
user.welcomeMessege()

// console.log(user)

function printThis() {
  let userName = "Avik"
  console.log(this.userName)
}

// printThis()

// Arrow functions

const greetUser = function () {
  let userName = "Avik"
  console.log(this.userName)
}

// greetUser()

const arrowFunction = () => {
  let userName = "Avik"
  console.log(`Welcome, ${this.userName}`)
}

// arrowFunction()

// Explicit return function

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

const returnObject = () => ({userName: "Avik"})

let number1 = 4
let number2 = 2

console.log(addTwo(number1, number2))
console.log(returnObject())

// Implicit return functions
