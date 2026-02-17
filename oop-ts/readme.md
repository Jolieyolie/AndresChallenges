# OOP-Class-TS-1
# Task Description
Create a class named IceCreamFlavor in a new file.

The class should have the following attributes

name: string

price: number

isPopular: boolean

description: string → optional

When created, name should be ‘’ , price = 0, isPopular = false, and description = undefined

Create 4 instances of IceCreamFlavor and set their properties.

Store the 4 instances in an array.

Display the names of all popular ice cream flavors (isPopular) on the console.

# OOP-Class-TS-2
# Task Description
- Create a class named SchoolClass in a new file
- The constructor of the SchoolClass class should output the following to the console: “School class creation successful”
- Two constructor parameters should be passed: id and name, which set the corresponding properties of the class
- The endDate property should be optional and is not created via the constructor
- Create three SchoolClasses - they must be created with constructor parameters
- Change the name of two SchoolClasses retrospectively by setting the property

# OOP-Class-TS-3
# Task Description
We now want to further expand our school class management (SchoolClass).

- **a)** We want to bring the school class to life and need a Person class with the following attributes/properties:
    - id
    - firstName
    - lastName
    - birthday

Think about the appropriate data types yourself.

- **b)** Add another attribute/property to the SchoolClass class, namely an array of persons.
- **c)** Test your classes and methods in app.ts. Create a school class and add several persons.
- **d)** Display all persons from the school class.
- **Tip:** You can use a loop to create the persons.



# OOP-Class-TS-4
# Task Description
Create a Car class with the following properties:

- brand
- constructionYear
- currentSpeed

Create a separate Driver class with the following properties:

- firstName
- lastName
- age
- car

Think about suitable data types for the properties.

The corresponding car should already be passed and set in the Driver constructor.

Finally, you should create several cars and drivers in the app.ts file and link them together.


# OOP-Class-TS-Level-5
# Task Description
We want to lay the foundations for a streaming app.
To do this, we need the following classes: Series, Episode, and Actor.

The following relationships exist:

- Series have episodes.
- Episodes have actors.

A series has the following properties:

- title
- description
- startYear
- endYear
- episodes

An episode has the following properties:

- title
- length
- description
- actors

An actor has the following properties:

- firstName
- lastName
- birthday
- gender

Think about useful data types for the properties.

Create 3 series with a few episodes and actors.

Write a function printSeriesInfo(series: Series) that outputs the following to the console as an example for a series.

```tsx
Title: Breaking Bad
Description: A high school chemistry teacher turned methamphetamine manufacturer
Start Year: 2008
End Year: 2013
Number of Episodes: 2

Actors:
- Bryan Cranston
  - Birthday: 1956-03-07
  - Gender: Male
- Aaron Paul
  - Birthday: 1979-08-27
  - Gender: Male
- Anna Gunn
  - Birthday: 1968-04-11
  - Gender: Female
```

For Actors, all actors from all episodes should be displayed.

# ✨ Bonus
- Do not display duplicate values for Actors.



# OOP-Class-TS-6
# Task Description
- Define a class Animal
- It should contain the properties species (string), age (number), and color (string)
- Implement get and set methods for each property.
- Define another class Person that contains the properties name (string), birthday (Date), and gender (Enum).
- Implement get and set methods for name and gender. birthday should be set in the constructor and otherwise only have a get method.

# OOP-Class-TS-7
# Task Description
- We are building on the IceCreamFlavors class [OOP-Class-TS-1](https://www.notion.so/OOP-Class-TS-1-2fff0b0e99b3802ca97ee2f5a69cd2b7?pvs=21)
- The class should have three methods
    - getTotalPrice(numberOfScoops: number)
    → outputs the total price to the console based on the number of scoops of ice cream passed
    - printInfo()
    → outputs the following to the console, for example

```tsx
'Flavor Vanilla is popular and costs 2.10 Euro.'
```

- getLengthOfDescription()
→ returns the text length of description or 0 if the property is not set
- Call the method on your existing instances of IceCreamFlavor

# ✨ Bonus

- Display all IceCreamFlavors as divs in HTML with name, price, and a label for popular ice cream flavors (e.g., star).
- Each IceCreamFlavor should have a +1 button that can be used to increase the number of scoops → the getTotalPrice method of the corresponding IceCreamFlavor instance should then be called and the result also displayed in HTML.

![iceCreamOOP.webp](attachment:53590e18-66f6-40f1-8481-09e94a9b0073:iceCreamOOP.webp)


# OOP-Class-TS-8
# Task Description
- We are building on the Car and Driver classes [OOP-Class-TS-4](https://www.notion.so/OOP-Class-TS-4-2fff0b0e99b380eaa534d9f4de3835b6?pvs=21)
- In the Car class
    - constructionYear should only be set via the constructor
    → Value can only be retrieved via a getter (get method)
    - There should be a method getSpeedInfo(): string with this logic
        - currentSpeed ≤ 40 → return value ‘Driving slowly’
        - currentSpeed > 40 and ≤ 70 → return value ‘Driving normally’
        - currentSpeed > 70 and ≤ 120 → return value 'Driving fast'
        - currentSpeed > 120 and ≤ 190 → return value ‘Driving really fast’
        - currentSpeed> 190 → ‘WTF’
- Create an enum called CarType in a new file.
    
    Values → Unknown, Sedan, SUV, Coupe, Convertible, Hatchback, Truck
    
- Extend the Car class with a new property carType: CarType
- In the Driver class
    - There should be another property licenseFromYear: number, which can only be set via the constructor
    → Value can only be retrieved via a getter (get method)
    - There should be a method getCarType(): CarType, which outputs the CarType of the current car as text


# OOP-Class-TS-9
# Task Description
- Define a Customer class
- It should contain the properties name (string), email (string), address (string), postalCode (string), and city (string)
- Implement get and set methods for each property.
- Before setting the name, check that it does not exceed 60 characters in length. If it does, display a meaningful error message on the console. The value will then not be set.
- Before setting the email address, check that the address contains an @ sign and a period. If necessary, display a meaningful error message on the console. The value will then not be set.
- Before setting the postal code (postalCode), check whether the postal code has 5 digits and is between 00000 and 99999. If necessary, a meaningful error message should be displayed on the console. The value will then not be set.
























