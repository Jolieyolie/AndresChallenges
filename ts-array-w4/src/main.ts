import './style.css'
// task 12
console.log("---------------------task12-------------------------")
const futuramaQuote: string = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
const sentences: string[] = futuramaQuote.split('.');
sentences.forEach((sentence, index) => {
  console.log(`${index}: "${sentence.trim()}"`);
})
console.log(`Total sentences: ${sentences.length}`);

const words: string[] = futuramaQuote.split(' ');
words.forEach((word, index) => {
  console.log(`${index}: "${word.trim()}"`)
})
console.log(`Total words: ${words.length}`);

const characters: string[] = futuramaQuote.split('');
characters.forEach((char, index) => {
  console.log(`${index}: "${char}"`);
})
console.log(`Total characters: ${characters.length}`);

// task 13
console.log("---------------------task13-------------------------")
const string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
const includesPiper: boolean = string.toLowerCase().includes("piper");
console.log(`Includes "piper": ${includesPiper}`);
const includesPickedPeck: boolean = string.toLowerCase().includes("picked peck");
console.log(`Includes "picked peck": ${includesPickedPeck}`);
const includesPicked: boolean = string.toLowerCase().includes("picked");
console.log(`Includes "picked": ${includesPicked}`);
const includesPeppers: boolean = string.toLowerCase().includes("peppers");
console.log(`Includes "peppers": ${includesPeppers}`);
const includesHello: boolean = string.toLowerCase().includes("hello");
console.log(`Includes "hello": ${includesHello}`);

// task 14
console.log("---------------------task14-------------------------")
const originalString: string = "Yolanda";
const reversedString: string = reverseString(originalString);
console.log(`Original String: "${originalString}"`);
console.log(`Reversed String: "${reversedString}"`);
function reverseString(string: string): string {
  return string.split('').reverse().join('');
}
const testString1: string = "Sergio";
console.log(`Reversed "${testString1}": "${reverseString(testString1)}"`);
const testString2: string = "Never odd or even";
console.log(`Reversed "${testString2}": "${reverseString(testString2)}"`);
const testString3: string = "!edoc gnitirw peek ,taerg era uoY";
console.log(`Reversed "${testString3}": "${reverseString(testString3)}"`)

// task 15
console.log("---------------------task15-------------------------")
const languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

function sortAlphabetically(arr: string[]): string[] {
  return [...arr]
    .sort()
    .map((sortedItem, index) => `${index}: ${sortedItem}`);
}
const sortedLanguages: string[] = sortAlphabetically(languages);
console.log("Languages sorted alphabetically:");
sortedLanguages.forEach(item => {
  console.log(item);
});

const europpeanCountries: string[] = [
    "Germany",
    "France",
    "Sweden", 
    "Great Britain", 
    "Czech Republic", 
    "Switzerland" ];
const sortedCountries: string[] = sortAlphabetically(europpeanCountries);
console.log("European countries sorted alphabetically:");
sortedCountries.forEach(item => {
  console.log(item);
})

// task 16
console.log("---------------------task16-------------------------")
const numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70]
numArray1.sort((a, b) => a - b);
console.log("Sorted numArray1:");
numArray1.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

numArray1.sort((a, b) => b - a);
console.log("Sorted numArray2:");
numArray1.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

// task 17
console.log("---------------------task17-------------------------")
const numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];
numArray.sort((a, b) => a - b);
console.log("Sorted numArray1:");
numArray.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

// task18
console.log("---------------------task18-------------------------")
const artWorks: string[] = [
  "Starry Night - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "The Birth of Venus - Sandro Botticelli",
  "The Night Watch - Rembrandt",
  "Mona Lisa - Leonardo da Vinci",
  "The Potato Eaters - Vincent van Gogh",
  "The Scream - Edvard Munch",
  "The Last Supper - Leonardo da Vinci",
  "The Annunciation - James Tissot",
  "The Garden of Earthly Delights - Hieronymus Bosch"
];
const artWorkDates: string[] = [
  "Starry Night - 1889",
  "Guernica - 1937",
  "The Birth of Venus - 1486",
  "The Night Watch - 1642",
  "Mona Lisa - 1503",
  "The Potato Eaters - 1885",
  "The Scream - 1893",
  "The Last Supper - 1495",
  "The Annunciation - 1885",
  "The Garden of Earthly Delights - 1505"
];
function artWorkSearch(artWorkName: string): void {
  let found = false;
  artWorks.forEach((artWork, index) => {
    if (artWork.toLowerCase().includes(artWorkName.toLowerCase())) {
      const name: string = artWork.split(' - ')[0];
      const artist: string = artWork.split(' - ')[1];
      const year: string = artWorkDates[index].split(' - ')[1];
      console.log(`'${name}' was painted by ${artist} in the year of ${year}`);
      found = true;
    }
});
  if (!found )  {
    console.log(`Artwork '${artWorkName}' not found.`);
    }
  }

artWorkSearch("The Scream");
artWorkSearch("Mona Lisa");
artWorkSearch("The Night Watch");
artWorkSearch("The Birth of Venus");
artWorkSearch("Unknown Artwork");

// task19
console.log("---------------------task19-------------------------")
const drinks: string[] = [
    "Coca-Cola",
    "Apple juice",
    "Pepsi",
    "Grape juice",
    "Sprite",
    "Orange juice",
    "Red Bull Energy Drink",
    "Fanta"
];
const sortedDrinks: string[] = drinks.sort();
function myDrinks(): void {
  sortedDrinks.forEach((drink, index) => {
    console.log(`${index}: ${drink}`);
  }
    )}
myDrinks();

// task20
console.log("---------------------task20-------------------------")
const drinks2: string[] = [
    "Coca-Cola",
    "Apple juice",
    "Pepsi",
    "Grape juice",
    "Sprite",
    "Orange juice",
    "Red Bull Energy Drink",
    "Fanta"
];
const upperDrinks:string[] = drinks2.map(drinks => drinks.toUpperCase());
console.log(upperDrinks);
drinks2.map(drink => {
  console.log(`I like ${drink}`)
})

// task21
console.log("---------------------task21-------------------------")
const arrayNum: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

const doubledArray: number[] = arrayNum.map(num => num * 2).sort((a, b) => a - b  );
doubledArray.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

// task22
console.log("---------------------task22-------------------------")
const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius: number[] = fahrenheit.map(temp => ((temp - 32) / 1.8));
celsius.forEach((temp, index) => {
  console.log(`${index}: ${temp.toFixed(0)}°C`);
});

// task23
console.log("---------------------task23-------------------------")
const checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];
checkNumber.map(num => {
  if (num % 3 === 0) {
    return num += 100;
  } else {
    return num;
  }
}).forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

// task24
console.log("---------------------task24-------------------------")
const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];
album.map(file => {
  if (file.toLowerCase().includes('.')) {
    return file.substring(0, file.lastIndexOf("."))
    } else {
      return 'invalid';
    }
  }).forEach((album, index) => {
    console.log(`${index}: ${album}`);
  })

// task25
console.log("---------------------task25-------------------------")
const fruits: string[] = ['🍇', '🍌', '🍒', '🍎'];
fruits.map((fruit => fruit + '🍹'))
.forEach((fruit, index) =>  {
  console.log(`${index}: ${fruit}`);
});

// task26
console.log("---------------------task26-------------------------")
const normalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(array: number[]): void {
  const evenNumbers: number[] = array.filter(num => num % 2 === 0);
  evenNumbers.forEach((num, index) => {
    console.log(`${index}: ${num}`);
  });
}
function printOddNumbers(array: number[]): void {
  const oddNumbers: number[] = array.filter(num => num % 2 !== 0);
  oddNumbers.forEach((num, index) => {
    console.log(`${index}: ${num}`);
  });
}
console.log("even:")
printEvenNumbers(normalNumbers);
console.log("odd:")
printOddNumbers(normalNumbers);


// task27
console.log("---------------------task27-------------------------")
