const languages = {
  js: "JavaScript", 
  py: "Python",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift"
}

for (const key in languages) {
  console.log(`${key} shortcut is ${languages[key]}`)
}

const programming = ["js", "python", "c", "java", "c++"]

for (const value in programming) {
  console.log(programming[value])
}
