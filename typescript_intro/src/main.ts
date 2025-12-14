import "./style.css";
import "./index.css";
import "./function1";
import "./function2";
import "./function3";
import "./function4";
import "./typescript_level_01";
import "./typescript_level_02";
import "./vat_calculator";
import type { IUser } from "./interfaces/IUser";
// let name: string = "Alice";
// let age: number = 25;
// let isStudent: boolean = true;
// console.log(name);
// console.log(age);
// console.log(isStudent);
// // array of numbers
// let numbers: number[] = [1, 2, 3, 4, 5];
// let myArray = ["hello", 42, true, { key: "value" }, [1, 2, 3]];
// console.log(numbers);
// console.log(myArray);
let myArray: (string | number | boolean | object | any[])[] = [
  "hello",
  42,
  true,
  { key: "value" },
  [1, 2, 3],
];
console.log(myArray);
const user: IUser = {
  id: 1,
  name: "John Doe",
};

console.log(user);

// string Methods return new string
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

greet("Alice"); // "Hello, Alice!"
greet("Bob", "Good morning"); // "Good morning, Bob!"

console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));
const double: string = "world, 'hello'";
console.log(double.toUpperCase()); // "WORLD, 'HELLO'"
console.log(double.length);
console.log(double.charAt(4));
console.log(double.at(4));
console.log(double.indexOf("o"));
