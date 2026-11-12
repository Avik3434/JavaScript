const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')

const generateRandomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = '#'
    
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

const startChangingColors = function (){
    document.body.style.backgroundColor = generateRandomColor()
}

let intervalId;
startButton.addEventListener('click', () => {
    console.log('starting')
    if (!intervalId) {
        intervalId = setInterval(startChangingColors, 1000)
    }

})

stopButton.addEventListener('click', () =>{
    console.log("stopped")
    clearInterval(intervalId)
    intervalId = null

})