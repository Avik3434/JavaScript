class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`The name is ${this.username}`)
    }

    // static stop the access of the function to its objects
    static createId(){
        return (Math.floor(Math.random() * 10))
    }
}

const Avik = new User('Avik')
// console.log(Avik.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "iPhone@apple.com")
iPhone.logMe()

iPhone.createId()