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