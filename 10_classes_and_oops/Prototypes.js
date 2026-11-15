let myName = "Avik     "

// console.log(myName.truelength);

const myHeros = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"]

const heroPower = {
	"Thor": "Hammer",
	"Hulk": "Anger",
	"Ironman": "Tech",
	"Spiderman": "Web",
	"Captain America": "Shield",

	getHeroPower: function () {
		console.log(`Thor's power is ${this["Thor"]}`)
	}
}

// Injecting a new property into the Object prototype

Object.prototype.avik = function () {
	console.log("Avik is present in all object prototypes. This is a bad practice. Don't do this in production code.")
}

// heroPower.avik() // got the new prototype function

// myHeors.avik() // array also gets the same object function 

// Injecting in arrya will not inject in Object.
Array.prototype.printAvik = function () {
	console.log("This is avik");
}

// myHeros.printAvik()

// Inheritance


const teacherProfession = {
	profession: "Software developer",
}

const teacherBio = {
	name: "Hitesh Chaudhary",
}

const TeacherVideoCount = {
	videCount: 51
}

const Teacher = {
	makeVideos: false,
	isAvailable: true,
	isFulltime: false,
	__proto__: teacherBio // getting values from teacherBio to Teacher using '__proto__'
}

// Old syntax
Teacher.__proto__ = teacherProfession // inserting values in the global scope 

// Modern syntax
Object.setPrototypeOf(Teacher, TeacherVideoCount)

let anotherUserName = 'Avik Mukherjee    '

String.prototype.trueLength = function(){
	console.log(`${this}`)
	console.log(`True length is ${this.trim().length}`)
}

myName.trueLength()
anotherUserName.trueLength()