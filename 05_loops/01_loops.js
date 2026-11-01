// for loop

// for (let i = 0; i < 10; i++) {
//   console.log(`Current value is ${i}`)
// }

// table of a number

for (let i = 1; i <= 10; i++) {
  //console.log(`\nTable of ${i}\n`)
  for (let j = 1; j <= 10; j++) {
    // console.log(`Outer loop ${i} and Inner loop ${j}`)
    //console.log(`${i} x ${j} = ${i * j}`)
  }
}

// Way to print items from an array

const items = ["apples", "banana", "guava", "orange", "cherry"]

for (let i = 0; i < items.length; i++) {
	//console.log(`${i} value of array is ${items[i]}`)
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if ((i % 5) == 0) {
    console.log(`Skipping cause ${i} is divisible by 5`)
    continue; 
  }
  console.log(`Value of i is ${i}`)

}