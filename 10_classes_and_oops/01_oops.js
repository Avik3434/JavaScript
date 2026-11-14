const user = {
    username: "Avik3434",
    password: 1234,
    loginCount: 3,
    isLoggedIn: false,

    getUserDetails: function(){
        // console.log("Got data from database")
        console.log(`The user name is: ${this.username}`)
        // this refers to the current object
        console.log(this)
    }
}

// console.log(user["username"])
// user.getUserDetails()

// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this // returning the entire object of the current context
    // without return this keyword it will also return 'implicitly'
}

// new gives us a unique instance
const userOne = new User("Avik", 34, false)
const userTwo = new User("Thor", 23, true)
console.log(userOne.constructor) // values overwritten
// console.log(userTwo)
// userOne.greetings()