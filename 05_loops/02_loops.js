// while loops

let i = 0

while (i < 10) {
  console.log(`value of i is ${i}`)
	i = i + 2
}

const heroes = [
  "Flash",
  "Superman",
  "Batman",
  "Thor",
  "Spiderman",
  "Ironman"
]

let j = 0
while (j < heroes.length) {
  console.log(heroes[j])
  j ++
}

// Do while toop
let score = 1

do {
  console.log(`Score is ${score}`)
  score++
} while (score <= 10);