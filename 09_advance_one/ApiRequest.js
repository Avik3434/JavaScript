const printData = function(data){
    const cardArea = document.querySelector('.bio-card')
    console.log(data)
    cardArea.innerHTML = `

        <img src="${data.avatar_url}" alt="Photo of person">

        <div class="info">
            <p>Name: <span class="name-value">${data.name}</span></p>
            <p>Id: <span class="id-value">${data.id}</span></p>
            <p>Followers: <span class="followers">${data.followers}</span></p>
        </div>
        
    `
}

const showData = function(requestURL){ 

    const xhr = new XMLHttpRequest()
    let readySTATE = null 

    xhr.onreadystatechange = function () {
        readySTATE = xhr.readyState
        console.log('States: ', readySTATE)
        if (readySTATE === 4) {
            console.log("State completed\n")

            let data = JSON.parse(this.responseText)
            printData(data)
            // return data
        }
    }
    xhr.open('GET', requestURL)
    xhr.send()
}

const submitButton = document.querySelector('.submit')
const inputField = document.querySelector('.url')

const getData = function(e){
    if(!inputField.value){
        alert("Enter an url")
        return
    }
    let URL = inputField.value
    showData(URL)

}

submitButton.addEventListener('click', getData)