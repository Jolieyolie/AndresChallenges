// # Task1
// - Now you will learn about string methods. These are methods for analyzing and working with character strings.
// - For example, you can find out the [length of a string](https://www.w3schools.com/jsref/jsref%5Flength%5Fstring.asp) or concatenate strings.
// - The first step is to create two variables: firstName and lastName.
// - Now display the length of both variables in the console. Use .length for this.
// - Create another variable, fullName, which is a combination of the two variables.
// - Next, display the length of the variable fullName in the console.
let firstName: string = "Andre";
let lastName: string = "Cadete";
console.log(firstName.length);
console.log(lastName.length);
let fullName: string = firstName + " " + lastName;
console.log(fullName);

// # Task2
// - Use the [indexOf()](https://www.w3schools.com/jsref/jsref%5Findexof.asp) command to obtain the position of a character in a string as the result in the console.
// - Use the following variable for this: const earthQuote = “How inappropriate to call this planet Earth, when clearly it is Ocean.”
// - Now find the position of the character “h” in the variable earthQuote.
// - Next, find the position of the character “Earth” in the variable earthQuote.
// - Finally, find the position of the character “Moon” in the variable earthQuote.
const earthQuote: string =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";
console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));

// # Task3
// - To obtain the position of a character in a string as a result in the console, you can use the [search()](https://www.w3schools.com/jsref/jsref%5Fsearch.asp) command.
// - Use the following variable: let oceanQuote = "Blue, green, gray, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
// - Find the position of the character “;” in the variable oceanQuote.
// - Find the position of the character “green” in the variable oceanQuote.
// - Find the position of the character “blue” in the variable oceanQuote.
let oceanQuote: string =
  "Blue, green, gray, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";
console.log(oceanQuote.search(";"));
console.log(oceanQuote.search("green"));
console.log(oceanQuote.search("blue"));

// # Task4
// - Use the [substring()](https://www.w3schools.com/jsref/jsref%5Fsubstring.asp) command to obtain the desired character strings.
// - Use the following example const whereIsSusi = ‘Susi is back from codingschool’ and use the “substring” method to display this output in an HTML document:
// - Susi
// - is
// - school
// - Susi is school
// - Save each result in a variable and use document.write(myVar+“ ”) to display the result. myVar is just an example here and can be replaced with the name of your variable.
const whereIsSusi: string = "Susi is back from codingschool";
let susi: string = whereIsSusi.substring(0, 4);
let isWord: string = whereIsSusi.substring(5, 7);
let school: string = whereIsSusi.substring(24, 30);
let susiIsSchool: string =
  whereIsSusi.substring(0, 4) +
  " " +
  whereIsSusi.substring(5, 7) +
  " " +
  whereIsSusi.substring(24, 30);
document.open();
document.write(susi + "<br>");
document.write(isWord + "<br>");
document.write(school + "<br>");
document.write(susiIsSchool + "<br>");
document.close();

// # Task5
// - Another string method is: [replace()](https://www.w3schools.com/jsref/jsref%5Freplace.asp). You can also use this command to obtain the desired character strings.
// - Use the following variable const samsStatus = “Sam is good at coding school” and use the “replace” method to display the following output in an HTML document:
// - Sam is bad at school
// - Susi is good at school
// - Sam is good at tennis
// - Save each result in a variable and use document.write(samsStatusBad… + “ ”) to display the result.
const samsStatus: string = "Sam is good at coding school";
let samsStatusBad: string = samsStatus
  .replace("good", "bad")
  .replace("coding ", "");
let susisStatus: string = samsStatus
  .replace("Sam", "Susi")
  .replace("coding ", "");
let samsTennisStatus: string = samsStatus.replace("coding school", "tennis");
document.open();
document.write(samsStatusBad + "<br>");
document.write(susisStatus + "<br>");
document.write(samsTennisStatus + "<br>");
document.close();

// # Task6
// - Use the command [toUpperCase()](https://www.w3schools.com/jsref/jsref%5Ftouppercase.asp) to obtain the modified string from the variable const whereIsSam = “Sam is going to school”: SAM IS GOING TO SCHOOL.
// - In addition to toUpperCase(), there is also the command [toLowerCase](https://www.w3schools.com/jsref/jsref%5FtoLowerCase). See what happens when you apply this to the variable whereIsSam.
// - Use the two commands to create the following strings and output them in your HTML:
// - SAM is going to SCHOOL
// - sam IS GOING TO school
// - Sam Is Going To School
const whereIsSam: string = "Sam is going to school";
let samUpper: string = whereIsSam.toUpperCase();
let samLower: string = whereIsSam.toLowerCase();
let samMixed1: string =
  whereIsSam.substring(0, 3).toUpperCase() +
  whereIsSam.substring(3, 16) +
  whereIsSam.substring(16).toUpperCase();
let samMixed2: string =
  whereIsSam.substring(0, 4).toLowerCase() +
  whereIsSam.substring(4, 16).toUpperCase() +
  whereIsSam.substring(16).toLowerCase();
let samMixed3: string =
  whereIsSam.substring(0, 3) +
  " " +
  whereIsSam.substring(4, 5).toUpperCase() +
  whereIsSam.substring(5, 6) +
  " " +
  whereIsSam.substring(7, 8).toUpperCase() +
  whereIsSam.substring(8, 12).toLowerCase() +
  " " +
  whereIsSam.substring(13, 14).toUpperCase() +
  whereIsSam.substring(14, 15).toLowerCase() +
  " " +
  whereIsSam.substring(16, 17).toUpperCase() +
  whereIsSam.substring(17);

document.open();
document.write(samUpper + "<br>");
document.write(samLower + "<br>");
document.write(samMixed1 + "<br>");
document.write(samMixed2 + "<br>");
document.write(samMixed3 + "<br>");
document.close();

// # Task7
// - In addition to using operators to concatenate strings, you can also use the [concat()](https://www.w3schools.com/jsref/jsref%5Fconcat%5Fstring.asp) command.
// - Create the three variables const infoAboutSam = “Sam is going to coding school,” const susi = “Susi,” and const and = “and.”
// - Now use concat() to generate the following outputs in your HTML document. Use all the methods you have already learned:
// - Sam is going to school and to the movie theater
// - Sam is going to the movie theater
// - Susi and Sam are going to school
// - Susi and Sam are going to the gym and to the movie theater
// - Susi is going to school and to the movie theater
const infoAboutSam: string = "Sam is going to coding school,";
const susiName: string = "Susi,";
const andWord: string = "and";
let output1: string =
  infoAboutSam.replace("coding ", "") + " " + andWord + " to the movie theater";
let output2: string = infoAboutSam.replace(
  "coding school,",
  "the movie theater"
);
let output3: string =
  susiName.replace(",", "") +
  " " +
  andWord +
  " " +
  infoAboutSam.replace("is", "are").replace("coding", "").replace(",", "");
let output4: string =
  output3.substring(0, 25) +
  " " +
  " the gym" +
  " " +
  andWord +
  " to the movie theater";
let output5: string =
  susiName.replace(",", " is going to school ") +
  andWord +
  " to the movie theater";
document.open();
document.write(output1 + "<br>");
document.write(output2 + "<br>");
document.write(output3 + "<br>");
document.write(output4 + "<br>");
document.write(output5 + "<br>");
document.close();
