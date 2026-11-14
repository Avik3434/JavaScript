function multiplyBy5(num) {
	return num * 5
}

multiplyBy5.power = 2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

// this -> current context

function createUser(username, score) {
	this.username = username
	this.score = score
}

createUser.prototype.increment = function () {
	this.score++
}

createUser.prototype.printScore = function () {
	console.log(`Price: ${this.score}`)
}

const tea = new createUser("tea", 12)
const coffee = new createUser("Coffee", 150)

// console.log(createUser.prototype)
tea.printScore()