// Immediately invoked function expressions (IIFE

function func() {
  console.log(`Database connected`)
}
func();

(function firstFunc() {
  // named IIFE
  console.log("This is function 1")
})();

((name) => {
  // unnamed IIFE
  console.log(`Welcome to the course, ${name}`)
})("Avik");
