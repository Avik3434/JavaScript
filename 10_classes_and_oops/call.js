function setUserName(username){
    // Complex database calls 
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const coffee = new createUser("Coffee", 'coffee@gmail.com', 1234)
console.log(coffee)