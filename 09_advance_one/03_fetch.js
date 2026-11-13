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