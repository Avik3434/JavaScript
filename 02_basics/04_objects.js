// const tinderUser = new Object() // singleton object
const TinderUser = {} // non singleton object

TinderUser["name"] = "Avik"
TinderUser["id"] = "123abcd"
TinderUser["isLoggedIn"] = false

// console.log(TinderUser)

const student = {
    email: "avikmukherjee@gmail.com",
    fullName: {
        firstName: "Avik",
        lastName: "Mukherjee"
    },
    age: 20,
    location: "Kolkata"
}

// console.log(student.fullName.firstName)

// Merging objects

const object1 = {
    1: "a",
    2: "b",
    3: "c"
}

const object2 = {
    4: "d",
    5: "e",
    6: "f"
}

const object3 = {
    7: "g",
    8: "h",
    9: "i"
}

// spread operator is used in modern javascript
const mainObject = {
    ...object1,
    ...object2
}

// console.log(mainObject);

const finalObject = Object.assign({}, object1, object2, object3)
// console.log(finalObject);

const users = [
    {
        id: 1,
        email: "user1@gmail.com",
    },
    {
        id: 2,
        email: "user2@gmail.com",
    },
    {
        id: 3,
        email: "user3@gmail.com",
    }
]

// console.log(users[0]["email"]);

// returns list of items
// console.log(Object.keys(TinderUser))
// console.log(Object.values(TinderUser))
// console.log(Object.entries(TinderUser))

// console.log(TinderUser.hasOwnProperty('isLoggedIn'));

// De-structuring of object

let course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Chai Aur Code"
}

let {courseInstructor: teacher} = course

console.log(teacher);

// {
//     "name":  "Avik",
//     "coursename": "JavaScript",
//     "price": "Free"
// }

[
    {},
    {},
    [],
    {}
]