// if

const isUserLoggedIN = true

if (isUserLoggedIN) {
  console.log(`User is logged in`)
}

if (2 === "2") {
  console.log("Condition executed")
}

let temperature = 27

if (temperature < 30) {
  console.log("Temperature is in control")
}
else {
  console.log("Temperature is higher than 30")
}

const score = 200

if (score > 100) {
  let power = "Fly"
  console.log(`You unlocked a new power "${power}"`)
}

const balance = 800

// if (balance > 500) console.log("Your balance is higher than 500");

if (balance < 500) {
  console.log("Balance is less than 500")
}

else if (balance > 500) {
  console.log("Balance is higher than 500")
}

else {
  console.log("Balance is 500")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
  console.log("User is allowed to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in successfully")
}

