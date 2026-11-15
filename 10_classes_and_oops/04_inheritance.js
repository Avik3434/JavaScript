class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log("User Name is", this.username)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`This course was added by ${this.username}`)    }
}
// super() refers to the class that is being extended

const coffee = new Teacher("cof fee", 'coffee@gmail.com', 12345678)
// console.log(coffee)
coffee.addCourse()

const coldCoffee = new User("Cold Coffee")
coldCoffee.logMe()

console.log(coffee instanceof User)
console.log(coldCoffee instanceof Teacher)