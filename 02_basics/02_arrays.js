const marvelHeros = ["thor", "Ironman", "Captain", "hulk"]
const dcHeros = ["Superman", "Aquaman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros)
// console.log(marvelHeros[4][2])

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

const allNewHero = [...marvelHeros, ...dcHeros]
// console.log(allNewHero)

const anotherArray = [1, 2, 3, [3, 4, 5, [5, 6, 7, 8, 9]]]

console.log(anotherArray.flat(Infinity))

console.log(Array.isArray(anotherArray));

let userName = "Avik Mukherjee"
userName = userName.replace(" ", "")
const nameArray = Array.from(userName)

console.log(nameArray)
console.log(Array.from({user_name: "Avik"})) // special case returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))