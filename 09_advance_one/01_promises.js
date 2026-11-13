const promiseOne = new Promise(function (resolve, reject) {

    // Async tasks
    // Database calls, cryptography, network calls

    setTimeout(() => {
        console.log("Async task is completed")
        resolve() // connected with then()
    }, 1000)

})

// resolve has a connection with then()

promiseOne.then(() => {
    console.log("Promise is consumed")
})

new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Promise number 2 completed")
        resolve()
    }, 1000)

}).then(function () {
    console.log("Pomise 2 is consumed")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            userName: "Avik",
            id: 123,
            login: false,
            address: null,
            email: 'avikmukherjee568@gmail.com'
        })
    }, 1000)
})

promiseThree.then((user) => {
    console.log("Promise 3 consumed")
    console.log(user["userName"])
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({
                userName: "Avik Mukherjee",
                id: 12,
                email: 'avikmukherjee568@gmail.com'
            })
        } else {
            reject('[ERROR] Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user.userName);
    return user.userName
}).then((userName) => {
    console.log(userName)
}).catch(function (err) { // catch() is connected with reject()
    console.log(err)
}).finally(() => console.log("Promise 4 executed and completed")) // will run always no matter what!

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                languageName: 'javaScript',
                password: 12345,
                type: "browser language"
            })
        } else {
            reject('[ERROR] Js went wrong')
        }
    }, 1000)
})

// Async - await 
// it can not show errors directly like then() and catch() methods 
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()