const array1 = [1, 2, 3, 4, 5]

// const total = array1.reduce(function (acc, currentVal) {
//   console.log(`Acc ${acc} and current value ${currentVal}`)
//   return acc + currentVal
// }, 0)

const total = array1.reduce((accumulator, current) => {
  return accumulator + current
}, 0 )

const shoppingCart = [
  {
    course: "JavaScript",
    price: 2999
  },
  {
    course: "Python",
    price: 3999
  },
  {
    course: "Golang",
    price: 2999
  },
  {
    course: "Web dev",
    price: 8999
  },
]

const myTotal = shoppingCart.reduce((acc, item) => (acc + item["price"]), 0)

console.log(`Total cart price is ₹${myTotal}`)