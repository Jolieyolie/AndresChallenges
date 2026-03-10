# BOM-TS
### **Assignment**
- **Learning goal:** In this exercise you will learn how to create a countdown in minutes that can be paused and restarted.
- Write a function that displays a **countdown in minutes** and can be **paused** and **restarted**.
- The HTML and CSS are provided (see code snippet).
- Use, among other things:
    - `setInterval()`
    - `clearInterval()`
    - `if` statements

# Type & Error-1
### **Assignment**
- Create a new file called `app.ts`.
- Create a **union type** called `Result` with the values `"success"`, `"error"`, and `"pending"`.
- Define a variable of type `Result` and assign one of the values to it.
- Write a function `handleResult` that accepts a parameter of type `Result`.
- Implement `handleResult` so that it prints an appropriate message depending on the value passed in.
- Test the function by passing different values to it.


# Type & Error-2
### **Assignment**
- Create a file called `alcohol.ts`.
- Create two types, `Alcohol` and `Mixer`, each defining properties for alcoholic drinks and mixers.
- `Alcohol` has the properties: `name`, `percentage`, and `type`.
- `Mixer` has the properties: `name`, `type`, and `carbonated`.
- Then create an **intersection type** called `Cocktail` that contains the properties of both `Alcohol` and `Mixer`.
- Create an object of type `Cocktail` and assign appropriate properties to it.
- Log the cocktail’s properties to the console to make sure the type was created correctly.

# Type & Error-3
### **Assignment**
- Create a file called `user-input.ts`.
- Write a function `greetUser` that asks the user for a username using a **window prompt**.
- Throw your own error if no name is entered.
- Then use a `try/catch` block to catch this error when retrieving the username.
- If the user enters a name, print a personalized greeting using the user’s name.
- If an error occurs (e.g., the user closes the dialog), print a default greeting.

To learn more about Try and Catch, I recommend reading [this.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch))


# Type & Error-4
### **Assignment**
- Create a file called `lotto-numbers.ts`.
- Write a function `generateLottoNumber` that generates a lotto number.
- Generate a random number between **1 and 100** using `Math.random()`.
- If the randomly generated number is greater than **49**, throw an error.
- Otherwise, return the number.
- In a loop, call `generateLottoNumber` until you have **7 valid numbers**.
- Use a `try/catch` block to catch and handle errors.
- If no error occurred, push the generated lotto number into an array `lottoResults: number[]`.
- **No duplicate numbers** are allowed in `lottoResults`.
- Finally, print the resulting lotto number series to the console.


# Type & Error-5 **(Cocktail mixing with intersection types)**
### **Assignment**
- We are extending the task [Type & Error-2](https://www.notion.so/Type-Error-2-31ef0b0e99b3802e90e5f307cdc08645?pvs=21).
- Create a file called `app.ts`.
- Write a function `mixCocktail` with two parameters:
    - `alcohol: Alcohol`
    - `mixer: Mixer`
- The return value should be of the **intersection type** `Cocktail`.
- The returned object should contain the properties from the provided `alcohol` and `mixer`.
- For the `name` field, set a combination of both objects, e.g.:
    - `alcohol.name = "Vodka"` and `mixer.name = "Lemon"` ⇒ `"Vodka Lemon"`
- Create **2 alcohols** and **2 mixers**.
- Call `mixCocktail` with **all combinations**.


# Date-1 (Basics)
### **Assignment**
- In this exercise we will learn about [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)().
- Display the following dates in the HTML document using `new Date()`.
- Store the values in variables (`date1`, `date2`, etc.).
- Use `innerHTML` to display the result.
- Test the following values:
    - `new Date("September 2, 2019 09:00:00")`
    - `new Date(0)`
    - `new Date(31556908800)`
    - `new Date(86400000)`
- **Please follow TypeScript standards.**

### **Note**

- Keep in mind that a `Date` object represents a point in time. That’s why the first line in the preview output is not “today’s date”. ;)


# Date-2 **(format date + local/UTC time)**
### **Assignment**
- **Learning goal:** Practice TypeScript date functions, selecting HTML elements, and displaying results in the HTML document.
- Display today’s date in the following two formats:
    - `dd-mm-yyyy` and `dd/mm/yyyy` (day, month, year)
- Use:
    - `getDate()`
    - `getMonth()`
    - `getFullYear()`
- Use `getElementById()` or `querySelector()`.
- Then display the current time in two ways:
    - local
    - UTC
- Show the result in the HTML document.
- **Please follow TypeScript standards.**


# Date-3 (**date-fns)**

### **Assignment**

- **Learning goal:** Use the [`date-fns`](https://date-fns.org/docs/Getting-Started) library.
- Install the [library](https://www.npmjs.com/package/date-fns) in your project with `npm i date-fns`.
- Create two date variables: `01.01.1970` and `now`.
- Use the functions `differenceInYears`, `differenceInHours`, `differenceInSeconds`, etc.
    - Print the difference between the two date values to the console (for each function).
- Create another variable `myBirthday`.
- Use `date-fns` to calculate:
    - your current age
    - your age on `07.04.2007`
- Use `format` to output information about your birthday in the following ways:
    - `"20.12.1979 12:40:00"`
    - `"20.12.1979 12:40"`
    - `"20.12.79"`
    - `"20. December 1979"`
    - `"12:40"`
    - `"Thursday"`
    - `"December"`
    - `"20th of December in the year of our Lord 1979"`



