# Objects-TS-1
# Task Description
- Learning objective: After this exercise, you will be able to access objects in an array
- Use the given code

- Access the values “Nala” and “Droopy” in this array of objects and display them on the console
- Display all dog names once
- Change the following values:
    - Droopy to Snoppy
    - Dinky to Pinky
- Create another object of type Pet, e.g., Hamster
- Add the object to the array


# Objects-TS-2
# Task Description
- **Learning goal:** After this exercise, you will be able to access object properties.
- Use the provided code: the `Storage` type and an object of type `Storage`.
- Access the properties of the object and log the following values to the console:
    - Secrets
    - Glue
    - Binder


# Objects-TS-3
# Task Descrioption
- **Learning objective**: After this exercise, you will be able to access object properties.
- **The code is provided.**
- **Access the following values from this array of objects and print them to the console:**
- "The Beatles"
- From the **Pink Floyd** object: "Download"
- From the **Pink Floyd** object: true
- The release years: 1971 and 1983
- From **Metallica**: "MC"
- From the **Metallica** object, the word: "Ride"
- **Create a new object of type Music and add it to the array.**


# Objects-TS-4
# Task Description
- **Learning objective**: After this exercise, you will be able to access object properties using .
- **Use the provided code.**
- **Using forEach(), output the following values for each object into the HTML:**
- artist
- title
- medium

# Objects-TS-5
- **Learning objective**: After this exercise, you will be able to access object properties using .
- **Use the provided code.**
- **Use forEach() to access properties of this object.**
- **Write a function for the object that prints the following to the console:**
- name
- coop
- city
- emails

# Objects-TS-6
# Task Description
- **Learning objective**: After this exercise, you will understand the difference between using map() and forEach() for the same use case.
- **Access the objects in the array using map(), forEach(), and filter(), and log each step to the console.**
- **Use the provided code (see code snippet).**
- Use forEach() to access all name values and **push** them into a new array.
- Use map() to access all name values.
- Use forEach() to access all pricePerGramEuro values and **push** them into a new array.
- Use map() to access all pricePerGramEuro values.
- Use forEach() to access all change values and **push** them into a new array.
- Use map() to access all change values.
- Use filter() to access the pricePerGramEuro values that are **greater than 50 euros**.
- **What do you notice when you compare both methods and stop using push()?**
- **Output everything as a table in your HTML document.**

# Objects-TS-7
# Task Description
- **Learning objective**: After this exercise, you will be able to sort collections with sort() alphabetically by name and numerically by nested properties such as career start.
- You have a collection of your favorite bands and you want to sort them alphabetically.
- Sort the bands from the code snippet **alphabetically by name**.
- Then sort the bands **in ascending order by career start** (period_active.start).
- Print the result to the console.

# Objects-TS-9
# Task Description
- **Learning objective**: After this exercise, you will be able to dynamically display data in HTML and sort it by different criteria (such as name, country, or music genre) via button clicks.
- You have a collection of your favorite bands. Now you want to be able to sort the table by **name**, **country**, or **type of music (genre)**.
- Use the provided code.
- Create a table and buttons, and implement the sorting in TypeScript.
- Display the data in the HTML.



# Objects-TS-10
- **Learning objective**: After this exercise, you will be able to create a search function using filter, includes(), and arrow functions.
- You have a collection of your favorite bands. You want to find your favorite star from the list of singers.
- Use the provided code.
- Create a search function in TypeScript that outputs the correct artist.
- Create a nice design for this table.


# Math-TS-1
# Task Description
- In this exercise, you will learn about the [Math.PI](https://www.w3schools.com/jsref/jsref%5Fpi.asp) object.
- Display Math.PI in the console.
- Declare const PI with the appropriate value.
- Round the value of PI to two decimal places and assign the value to the variable roundedPI.
- Output roundedPI in the console.
- **Please adhere to the Typescript standard.**

# Math-TS-2
# Task Description
- Learning objective: Use and understand [Math.round](https://www.w3schools.com/jsref/jsref_round.asp).
- **Please adhere to the Typescript standard.**
- Write a function that rounds a number.
- Use the numbers from the code snippet.


- Then output the result in the console.

# Math-TS-3(4 is the same)
# Task
- This exercise is about [[Math.random()](https://www.w3schools.com/jsref/jsref%5Frandom.asp) and [Math.floor()](https://www.w3schools.com/jsref/jsref%5Ffloor.asp).
- Declare the variable randomNum and output a random number in it.
- Declare the variable randomNum1\_10 and output a random number between 1 and 10.
- Declare the variable randomNum1\_100 and output a random number between 1 and 100.
- **Please adhere to the Typescript standard.**

# Math-TS-5
# Task Description
- **Learning objective**: Practice prompt() input handling, number conversion/validation, and math formulas with rounding.
- Write a small program that works as follows:
1. Ask the user for **weight in kg** (e.g., 72.5).
2. Ask the user for **height in meters** (e.g., 1.68).
3. Calculate the BMI using:

```tsx
 const bmi = weightKg / (heightM * heightM);
```

1. Round the BMI to **2 decimal places** and print to the console:
- weight, height, BMI
- a category based on the BMI:
- < 18.5 underweight
- 18.5–24.9 normal
- 25–29.9 overweight
- >= 30 obesity
1. If any input is invalid (null/empty, not a number, or ≤0), print an error message and stop.













