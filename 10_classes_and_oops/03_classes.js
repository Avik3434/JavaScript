// ES6

class Student {
    constructor(studentName, roll, studentClass, password){
        this.studentName = studentName;
        this.roll = roll;
        this.studentClass = studentClass;   
        this.password = password
    };
    encryptPassword(){
        return `${this.password}abcd`
    }

    nameCapitalizer(){
        return `${this.studentName.toUpperCase()}`
    }
}

const student1 = new Student("Avik Mukherjee", 1, 12, "123564")
console.log(student1.encryptPassword())
console.log(student1.nameCapitalizer())

// Without class syntax (behind the scene)

function User (userName, email, password){
    this.userName = userName
    this.email = email
    this.password = password
}

const newUser1 = new User(
    'coffee',
    'coffee@gmail.com',
    123235
)

User.prototype.passwordEncryption = function (){
        return `${this.password}abcsed`
    }
User.prototype.nameChanger = function(){
        return `${this.userName.toUpperCase}`
    }
console.log(newUser1.passwordEncryption())
console.log(newUser1.nameChanger())