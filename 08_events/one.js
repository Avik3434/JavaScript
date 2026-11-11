// document.getElementById('owl').onclick = () => {
//     alert('Owl clicked')
// }

// attachEvent()
// jQuery - onEventListener

// events to study more =>
// type, timestamp, defaultPrevented, target, toElement, srcElement, 
// clientX, clientY, screenX, screenY, altKey, crtlKey, shiftKey, keyCode , 

// const owlClicked = function () {
//     alert('Owl clicked again')
// }

// document.getElementById('images').addEventListener('click', (e) => {
//     console.log("Clicked inside the ul")
// })

// document.getElementById('owl').addEventListener('click', function (e){
//     console.log('Clicked owl inside ul')
//     e.stopPropagation()
// })

// document.getElementById('google').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log("google clicked")
// }, false)

document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName)
    if (e.target.tagName === "IMG"){
        let removeLi = e.target.parentNode
        removeLi.remove()
    }
})

// removeLi.parentNode.removeChild(removeLi)