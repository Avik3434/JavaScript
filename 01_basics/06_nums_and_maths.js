const score = 400

const balance = new Number(400)

// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toFixed(2))

const otherNumber = 12.3545

// console.log(otherNumber.toPrecision(2))

const survivalTime = 1200000000000
// console.log(survivalTime.toLocaleString(`en-IN`))

// ================== Math ================= //

// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(5.554636))
// console.log(Math.ceil(5.1))
// console.log(Math.floor(5.9))

let gameId = Math.random() * 10
console.log(gameId)

// To get a number between a min and a max range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min)) + min)