// # Task

// - Learning objective: After completing this exercise, you will be able to define and call a function with multiple parameters
// - Declare the function intro3() with the three parameters (name, city, age)
// - Using the appropriate arguments, output the following sentence in the console: “Hello, my name is Max. I am 27 years old. I come from Hamburg.”
// - Use your personal data or fictitious data.

// # Note

// - Feel free to check here again to see how a function is declared:
// [https://wiki.selfhtml.org/wiki/JavaScript/Funktion#Funktionsdeklaration_als_Statement]
// [https://www.w3schools.com/js/js_functions.asp]

function intro3(name: string, city: string, age: number): void {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old. I come from ${city}.`
  );
}
intro3("Max", "Hamburg", 27);
