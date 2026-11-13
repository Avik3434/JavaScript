async function getUserDataFromUrl() {
    try {
        const URL = "https://jsonplaceholder.typicode.com/users"

        const response = await fetch(URL)
        const data = await response.json()

        if (!data) {
            console.log("No data has been retrived!")
        } else {
            console.log(data[0].username) // Bret
        }
    } catch (error) {
        console.log(error)
    }
}

// getUserDataFromUrl()

const getUserData = function (URL) {

    fetch(URL).then((response) => {

        return response.json()

    })
        .then((data) => {
            console.log(data)
        })
        .catch(
            (err) => console.log(`Error: ${err}`)
        )
        .finally(
            () => console.log("The program finished executing...")
        )
}

// const URL = "https://jsonplaceholder.typicode.com/users"
const URL = "https://api.github.com/users/avik3434"

getUserData(URL)