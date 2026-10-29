function sayMyName(){
    console.log("A");
    console.log("v");
    console.log("i");
    console.log("k");
}
// sayMyName()  

function addTwoNumbers(number1, number2){ 
    return number1 + number2
}

let result = addTwoNumbers(3, 6)
// console.log(result)

function greetUser(userName="Admin"){

    if(!userName){
        return "Please enter a valid name"
    }

    else{
        return `${userName} Just logged in successfully`
    }
    }


// const greet = greetUser("Avik")
// console.log(greet)

// console.log(greetUser("Avik"))

function calculateCartPrice(firstNum, ...num){
    return num
}

// console.log(calculateCartPrice(3, 5, 7));

const item = {
    itemName: "Laptop",
    price: 999
}

function handleObject(anyObject){
    console.log(`Item name is ${anyObject["itemName"]} and price is ${anyObject["price"]}`)
}

handleObject(item)

const newArray = [122, 455, 633, 664]

function returnArraySecondItem(array){
    return array[1]
}

const secondItem = returnArraySecondItem(newArray) 
// console.log(secondItem)

console.log(returnArraySecondItem([100, 200, 300, 400, 500]))