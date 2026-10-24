const name = "John"
const repoCount = 10

// console.log(name + repoCount + "@gmail.com")

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// Another method to declare a string
const gameName = new String('JohnCarlsen')

console.log(gameName) // -> String {"John"}
console.log(gameName[0]) // -> J
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf('J'))

console.log(gameName.substring(0, 6))

const newGameName = gameName.slice(4, 7)
// console.log(newGameName)

console.log(gameName.replace("J", "R"))
//
console.log(gameName.substring(0, 7))
console.log(gameName.slice(-8, 4))

const userName = "     john   "

// console.log(userName)
console.log(userName.trim())

const githubUrlJavaScript = "https://github.com/Avik3434/JavaScript"
const githubUrlRag = githubUrlJavaScript.replace("JavaScript", "Intelligent-Document-Reviewer")

// console.log(githubUrlJavaScript)
// console.log(githubUrlRag)

const splittedUrl = githubUrlJavaScript.split("/")

// console.log(splittedUrl)
