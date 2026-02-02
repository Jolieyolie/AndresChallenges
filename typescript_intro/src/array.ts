// split method sülits a string into an array of substrings based on a specified separator.
const fruits:string = 'apple,banana,cherry';
const fruitArray:string[] = fruits.split(',',2);
console.log(fruitArray); // Output: ['apple', 'banana', 'cherry']

//repeat returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
const str:string = 'Hello ';
const repeatedStr:string = str.repeat(3);
console.log(repeatedStr); // Output: 'Hello Hello Hello '

//padStart pads the current string with another string (length, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.
const originalStr:string = '5';
const paddedStrStart:string = originalStr.padStart(3, '0');
console.log(paddedStrStart); // Output: '005'

//padEnd pads the current string with another string (length, if needed) until the resulting string reaches the given length. The padding is applied from the end (right) of the current string.
const paddedStrEnd:string = originalStr.padEnd(3, '0');
console.log(paddedStrEnd); // Output: '500'

const items:string[] = ['a', 'b', 'c'];
// items.forEach((item, index) => {
//     console.log(`${index + 1}: ${item}`);
// }

items.forEach((item,index) => {
    console.log(`${item.padEnd(3, ' ')}` + `.${index}`);
});

const first:string = 'Hello';
const second:string =  'World';
console.log(first.concat('', second)); // Output: 'HelloWorld'

//trim removes whitespace from both ends of a string.
const stringWithWhitespace:string = '   HELLO World!   ';
const trimmedStr:string = stringWithWhitespace
    .trim()
    .toLowerCase()
    .replace('world', 'TS')
    .concat('!!!'); 
console.log(trimmedStr); // Output: 'Hello World!'

//what is array? 
// An array is a data structure that can hold more than one value at a time.
// Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
// Arrays can hold values of different data types, including numbers, strings, objects, and even other arrays.

//array type vs element type
// The array type refers to the entire array structure, while the element type refers to the type of individual elements within that array.
// For example, in an array of numbers (number[]), the array type is 'array of numbers', and the element type is 'number'.

// Example:
let numbers: number[] = [1, 2, 3, 4, 5]; // array type is number[], element type is number
let strings: string[] = ['a', 'b', 'c']; // array type is string[], element type is string

// Accessing array elements
// You can access individual elements in an array using their index, which starts at 0.
console.log(numbers[0]); // Output: 1
console.log(strings[1]); // Output: 'b'

// Modifying array elements
// You can modify elements in an array by assigning a new value to a specific index.
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Array methods
// Arrays come with various built-in methods to manipulate and interact with the data they hold.
numbers.push(6); // Adds a new element to the end of the array
console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]

let removedElement = numbers.pop(); // Removes the last element from the array
console.log(removedElement); // Output: 6
console.log(numbers); // Output

// array: ordered list of items
// index: the position of an element in an array (starts at 0)
// length: the number of elements in an array
// element: an individual item in an array
//element type: the type of individual elements in an array
//array type: the type of the entire array structure

//what is the difference between number[] and Array<number> ?
// Both number[] and Array<number> are used to define an array of numbers in TypeScript. They are interchangeable and have the same meaning. The choice between them is mostly a matter of personal or team preference.