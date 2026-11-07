const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")

const button = document.querySelector(".calculate-btn")
const result = document.createElement('p')
result.className = 'result-line'

button.addEventListener('click', function () {
    
    let bmi;
    if (!heightInput.value || !weightInput.value){
        alert("Enter correct value first")
        return
    }
    bmi = parseInt(weightInput.value /((heightInput.value/100) ** 2) )
    let resultDiv = document.querySelector("#results")
    if (isNaN(bmi)) {
        result.textContent = 'Error'
    } else {
        result.textContent = `Your bmi is ${bmi}`
    }
    resultDiv.appendChild(result)
})