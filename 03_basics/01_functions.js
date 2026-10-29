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
console.log(result);

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

console.log(greetUser("Avik"));
