/*
take value -> calculate -> print
*/

// Student result sheet calculator

const studentName = "Avik Mukherjee"
const totalTheoryMarks = 90
const totalVivaMarks = 10

let englishTheory = 90
let mathTheory= 67
let scienceTheory= 77
let historyTheory= 82
let geographyTheory = 56

const subjects = ["English", "Math", "Science", "History", "Geography"]
const theory = [90, 67, 77, 82, 56]

let englishViva = 10
let mathViva = 10
let scienceViva = 10
let historyViva = 9
let geographyViva = 9
const viva = [10, 10, 10, 9, 9]

const theoryMarks = englishTheory + mathTheory + scienceTheory + historyTheory + geographyTheory

const vivaMarks = englishViva + mathViva + scienceViva + historyViva + geographyViva

const totalMarks = theoryMarks + vivaMarks
const avgMarks = totalMarks / 5

const totalPercentage = (totalMarks / ((totalTheoryMarks + totalVivaMarks) * 5)) * 100

console.log("\nStudent Result Calculator\n")
console.log(`Student Name: ${studentName}`)
console.log("===========================\n")

// console.log(`Total theory marks: ${totalTheoryMarks}`)
// console.log(`Total Viva marks: ${totalVivaMarks}\n`)

console.log("Obtained Theory marks")
for (let i = 0; i < theory.length; i++) {
	console.log(`${subjects[i]}: ${theory[i]}/${totalTheoryMarks}`)
}
console.log(`Total theory marks: ${theoryMarks}/${totalTheoryMarks}`)

console.log("\nObtained Viva marks")
for (let i = 0; i < viva.length; i++) {
	console.log(`${subjects[i]}: ${viva[i]}/${totalVivaMarks}`)
}
console.log(`Total Viva marks: ${vivaMarks}/${totalVivaMarks}`)

console.log("\nStatistics\n")
console.log(`Total Obtained marks: ${totalMarks}`)
console.log(`Total Percentage: ${totalPercentage}%`)
console.log(`Average Marks: ${avgMarks}`)
console.log(`Grade: ${calculateGrade(totalPercentage)}`)

function calculateGrade(percentage) {
  let grade = "None"
  if (percentage >= 90) {
    grade = "A+";
  }
  else if (percentage >= 80) {
    grade = "A"
  }
  else if (percentage >= 70) {
    grade = "B"
  }
  else if (percentage >= 60) {
    grade = "C"
  }
  else if (percentage >= 50) {
    grade = "D"
  }
  else {
    grade = "F"
  }
  return grade
}
