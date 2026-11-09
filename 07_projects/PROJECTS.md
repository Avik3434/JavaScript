# Projects Related to DOM

# Solution

### Background color changing page (Project 1)
[Source files](https://github.com/Avik3434/JavaScript/tree/main/07_projects/1-color-changer)

```JavaScript
const buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');
console.log(body)
buttons.forEach( (button) => {
    console.log(button)
    button.addEventListener('click', function (e) {

        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
    })
} )
```
### Bmi calcualtor (Project 2)
[Source files](https://github.com/Avik3434/JavaScript/tree/main/07_projects/2-bmi-calculator)

```Javascript
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
```
### Local digital clock

[source file](https://github.com/Avik3434/JavaScript/tree/main/07_projects/3-digital-clock)

```javascript
const clock = document.querySelector("#clock")
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);
```

### Local digital clock
    
[source file](https://github.com/Avik3434/JavaScript/tree/main/07_projects/4-Guess-the-number)

```Javascript
const form = document.querySelector('form')
let num = Math.round(Math.random() * 100)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    num = 56
    let tries = 0
    tries = document.querySelector('lastResult')
    
    const guessInput = parseInt(document.querySelector('.guessField').value)
    const resultSection = document.querySelector(".lowOrHi")
    const previousResult = document.querySelector('.guesses')
    const submitButton = document.querySelector('.guessSubmit')
    const lastResult = document.querySelector('.lastResult')
    let lastResultValue = parseInt(lastResult.textContent)
    guessInput.disabled = true
    if (lastResultValue <= 0){
        alert('Run out of tries')
        return
    }
    if (!guessInput || guessInput < 0 ||guessInput > 100 || isNaN(guessInput)){
        resultSection.textContent = 'Guess a number between 0 to 100'
    } else {
        if (lastResultValue <= 0){
            lastResult.textContent = 'Run out of guesses. Try again'
            alert('Run out of tries')
            return
        }
        else{
            if (guessInput === num){
                submitButton.disabled = true
                previousResult.textContent = `Guessed!`
                resultSection.textContent = `You guessed the number ${num}`
                resultSection.style.color = 'green'
            }
            else if (guessInput < num){
                previousResult.textContent = 'Guess Higher'
                lastResult.textContent = lastResultValue - 1
                tries + 1
            }
            else if (guessInput > num){
                previousResult.textContent = 'Guess Lower'
                lastResult.textContent = lastResultValue - 1 
                tries + 1
            }
        } 


    }
    
})
```