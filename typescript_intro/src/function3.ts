// # Task
// - Learning objective: After completing this exercise, you will be able to write a function with parameters, pass different values, and output the result of the function in the console.
// - Declare the function math() with two parameters.
// - The following happens in the function body {}:
// - Output the multiplication of the two parameters in the console.
// - Output the division of the two parameters in the console.
// - Call the function with the arguments (10, 2).
// - Test other values as well:
// - 30, 20
// - 100, 100
// - 5, 0
// - 45, 173
// - 1, 1000

// # Note
// - Two useful links for further reading:
// [No. 1](https://www.w3schools.com/js/js%5Ffunctions.asp) and [No. 2](https://de.wikipedia.org/wiki/Grundrechenart)
function math(num1: number, num2: number): void {
  console.log(`mutiplication: ${num1 * num2}`);
  if (num2 !== 0) {
    console.log(`division: ${num1 / num2}`);
  } else {
    console.log("division: undefined (cannot divide by zero)");
  }
}
math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
