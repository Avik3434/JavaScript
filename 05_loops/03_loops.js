// for of loop

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
	// console.log(num)
}

const userName = 'Avik Mukherjee'

// for (const name of userName) {
//   if (name === " ") {
//   if (name === " ") {
//   if (name === " ") {
//     console.log("Space detected")
//     continue
//   }
// 	console.log(`Each character of name is ${name}`)
// }

// Map
// map doesn't allow duplication

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("FR", "France")

// console.log(map)

for (const [Key, value] of map) {
  console.log(Key, "=", value)
}

const user = {
  userName: "Avik",
  price: 999,
  id: "123abc",
  websiteName: "Youtube",
}

for (const [key, value] of user) {
  console.log(key, "=", value)
}