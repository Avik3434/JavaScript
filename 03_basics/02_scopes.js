let a = 10
const b = 20
// var c = 30

let num2 = 45

if (true){
    const num1 = 12
    let num2 = 23
    var num3 = 34
}

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(num1);
// console.log(num2);
// console.log(num3);


function one() {
  const userName = "Avik"
  function two() {
    const websiteName = "Google"
    console.log(userName)
  }
  // console.log(websiteName)

  two()
}

// one()

if (true) {
  const userName = "Avik"
  if (userName === "Avik") {
    const website = "Youtube"
    // console.log(`${userName} has logged in into ${website}`)
  }
}

// console.log(userName)
//
// =========================== extra concept =========================

function addOne(num) {
  return num + 1
}

console.log(addOne(6))

export const addTwo = function (num) {
  return num + 2
}

