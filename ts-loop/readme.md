# Loops-TS-1
## Task Description
- Learning objective: After completing this exercise, you will be able to write a for loop that repeats multiple times, generates dynamic output using a counter variable, and outputs consistent values to the console.
- Write a [for loop](https://www.w3schools.com/JS/js%5Floop%5Ffor.asp) that outputs ‘Hello World + number’ exactly 10 times in the console
- The number should increase by 1 with each iteration

# Loops-TS-2
## Task Description
- Learning objective: After completing this exercise, you will be able to add numbers using a loop, use the push() method, and output the result to the console.
- Create an array with the numbers 0-10 using a loop.
- When working with arrays, you must initialise the array.

```tsx
let numbersToTen: number[]  = [];
```

- Use the push() command in the loop body
- Finally, output the variable numbersToTen to the console

![image.png](attachment:033cb253-6779-4799-ba44-de51036fef12:image.png)

#

# Loops-TS-3
## Task Description
- Learning objective: After completing this exercise, you will be able to use a for loop and understand the difference between a for loop and a for...of loop.
- Declare an array called ‘friendNames’ with the values: ‘George’, ‘Anass’, ‘Elaine’, ‘Hakan’, ‘Eric’, “Kim” and ‘Sergio’.
- Then use a for loop to display all names in the console
- Next, use a for...of loop to display all names in the console

# Loops-TS-4
# Task Description
- Learning objective: After completing this exercise, you will be able to use a loop or an array method to filter specific elements from an array based on a condition
- In the code snippet, you will find an array with different words
- Your goal is to write only those words to the HTML where the length of the word matches the number in the input field
- Use a loop or an array method

```tsx
const words: string[] = [
  'hello',
  'car',
  'dishwasher',
  'wardrobe',
  'cat',
  'example',
  'parents',
  'window',
  'birthday',
  'sky',
  'swimming',
  'newspaper'
];
```

# ✨ Bonus

- Create another input field where users can add new words to this collection
- Unfortunately, the added words are only available until the browser is refreshed; saving is not yet possible at this point


# Loops-TS-5
# Task Description
- Learning objective: After completing this exercise, you will be able to determine and return the highest value in an array of numbers using a loop.
- Write a function called getHighestNumber.
- The function is passed an array of numbers as a parameter.
- The function has the return type number
- The highest value from the passed array of numbers should be determined
    
    Tip: Go through all the numbers and always remember the current highest value in a variable
    
- This value is then returned with return
- Call the function with several arrays to test whether it works correctly


# Loops-TS-6
# Task Description
- Learning objective: After this exercise, you will understand how to use a for loop and conditional statements
- Let's assume we want to automatically create 100 file names for images in our folder. To do this, we create an array with standardised file names – as shown in the preview
- Declare the function createImageNames
- In the function body, declare the variable returnArray as an empty array
- Write a for loop
- You can use conditional statements (if, else) when constructing the file name to determine how many zeros must precede the number. Alternatively, you can use the string method [padStart()](https://www.w3schools.com/jsref/jsref_string_padstart.asp).
- Use push() to write the respective file name to the array.
- Return the array from the function with return.
- Display the result on the console.

![image.png](attachment:8604190b-e0e0-4480-97d4-3e5ff6ad0450:image.png)


# Loops-TS-7
# Task Description
- Learning objective: After completing this exercise, you will be able to generate text output based on user input using conditions and loops.
- Your HTML contains an input field where users can enter a number. This determines the number of letters ‘o’ that will be generated.
- Write a function that outputs the word ‘Loop’ in your HTML at the end, using the number of Os entered in the input field.
- There are several ways to solve this task
- You can use anything from array methods without variables to string methods, etc.
- Note that you should use a loop here

# Loops-TS-8
# Task Description
- Learning objective: After completing this exercise, you will be able to write a function that processes a string, checks individual characters, applies conditions, and counts and returns the number of certain letters (vowels).
- Write a function called getNumberOfVowels.
- It should count and return the number of vowels (A, E, I, O, U) in a given string.
- Use a loop to go through each letter in the passed string and a condition to check whether it is a vowel
- Test the function with several strings


# Loops-TS-9
# Task Description
- Learning objective: After this exercise, you will be able to create a function with a loop, generate random numbers, add them up and use a condition to control the loop
- Write a function addToFifty(): void
- In the function, a random number between 1 and 10 should be generated in a loop
- The number should be output to the console
- The random numbers should be added together until the number 50 is exceeded
- At the end, for example, if the total result is 53, the following should be output

```tsx
'53 > 50. Stopping right here.'
```

# ☝🏼 Hint
- Use Math.random()






















