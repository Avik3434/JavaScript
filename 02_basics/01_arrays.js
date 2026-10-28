// Arrays

const ids = [1, 2, 3, 4, 5]
// console.log(ids)

const nums = new Array(1, 2, 3, 4, 5, 6)
// console.log(nums[1])

// Arrays methods

// nums.push(7)
// nums.pop() // removes the last item inserted in array

// nums.unshift(9) // Inserts element at the start of an array

// console.log(nums.includes(0))
// console.log(nums.indexOf(5))

// console.log(nums)

const newArr = [1, 2, 3, 4, 5]

// slice, splice

console.log("A ", newArr)
const mna1 = newArr.slice(1, 3)

console.log(mna1)
console.log("B ", newArr)

const mna2 = newArr.splice(1, 3)
console.log(mna2)
console.log("C ", newArr)