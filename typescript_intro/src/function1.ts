// # Task

// - Learning objective: After this exercise, you will be able to define functions with parameters, use variables in the function body, and generate dynamic output in the console.
// - Declare the function intro2() with the parameter (paramName). The following then happens in the function body {}:
// - Declare the variable name with the value “User”
//     - The output on the console should be: Hi User. My name is paramName
// - Call the function with different arguments(min 3) and see what happens.

// # Note

// - Feel free to check here again to see how a function is declared: [https://wiki.selfhtml.org/wiki/JavaScript/Funktion#Funktionsdeklaration_als_Statement](https://wiki.selfhtml.org/wiki/JavaScript/Funktion#Funktionsdeklaration%5Fals%5FStatement) and [https://www.w3schools.com/js/js_functions.asp](https://www.w3schools.com/js/js%5Ffunctions.asp)
// - Another brief explanation of functions with parameters: [https://wiki.selfhtml.org/wiki/JavaScript/Funktion#Funktionen_mit_Parametern](https://wiki.selfhtml.org/wiki/JavaScript/Funktion#Funktionen%5Fmit%5FParametern)
// - You can also read: https://stackoverflow.com/questions/12874467/what-is-the-difference-between-arguments-and-parameters-in-javascript about the difference between parameters and arguments

export function intro2(paramName: string): void {
  let name: string = "User";
  console.log(`Hi ${name}. My name is ${paramName}`);
}
intro2("Alice");
intro2("Bob");
intro2("Charlie");
