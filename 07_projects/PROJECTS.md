# Projects Related to DOM

# Solution

### Background color changing page (Project 1)

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