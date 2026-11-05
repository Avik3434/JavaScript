const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (value) {
  // console.log(value)
})

coding.forEach((value) => {
  // console.log(value)
})

function printItem(item) {
  // console.log(`The current item is ${item}`)
}

// coding.forEach(printItem)

coding.forEach(function (item, index, arr) {
  // console.log(item)
  // console.log(index)
  // console.log(arr)

})

const lang = [
  {
    langName: "Javascript",
    shortName: "Js"
  },
  {
    langName: "Python",
    shortName: "py"
  },
  {
    langName: "Ruby",
    shortName: "rb"
  },
  {
    langName: "c++",
    shortName: "cpp"
  }
]

lang.forEach((item) =>{
  	console.log(item["langName"])
  	console.log(item.shortName)
})

