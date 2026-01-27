import './style.css'

// task1
console.log("---------------------------------task 1---------------------------------");
for (let i=1; i<=10; i++) {
    console.log(`hello world ${i}`);
}

// task2
console.log("---------------------------------task 2---------------------------------");
let numbersToTen: number[]  = [];
for (let i=0; i<=10; i++) {
    numbersToTen.push(i);
}
console.log(numbersToTen);
numbersToTen.forEach((num, index) => {
    console.log(`${index}: ${num}`)
});

// Task3
console.log("---------------------------------task 3---------------------------------");
let friendNames: string[] = ['George', 'Anass', 'Elaine', 'Hakan', 'Eric', 'Kim', 'Sergio'];
console.log('****for loop****')
for (let i=0; i<friendNames.length; i++) {
    console.log(friendNames[i]);
}
console.log('****for of loop****')
for (const name of friendNames) {
    console.log(name);
}

// task4
console.log("---------------------------------task 4---------------------------------");
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

const submitButton = document.getElementById('button') as HTMLButtonElement;
const inputLength = document.getElementById('numberInput') as HTMLInputElement;
const inputSubstring = document.getElementById('wordInput') as HTMLInputElement;
const output = document.getElementById('output')!;

if (!submitButton || !inputLength || !inputSubstring) {
    throw new Error('One or more elements not found in DOM');
}



submitButton.addEventListener('click', () => {
    output.innerHTML = '';
     const newWord = inputSubstring.value.trim();
    if (newWord) {
        words.push(newWord);
        console.log(`Added word: ${newWord}`);
        inputSubstring.value = '';
    }

    const length = Number(inputLength.value);
    const matchingWords = words.filter(word => word.length === length);

    if (matchingWords.length === 0) {
        output.textContent = 'No words found with that length.';
        return;
    }

    for (const word of matchingWords) {
        const p = document.createElement('p');
        p.textContent = word;
        output.appendChild(p);
    }

    console.log(words); 
    });

// task5
console.log("---------------------------------task 5---------------------------------");
function getHighestNumber(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array must not be empty");
    }
    let highest = numbers[0];
    for (const num of numbers) {
        if (num > highest) {
            highest = num;
        }
    }
    return highest;
}
const sampleNumbers: number[] = [3, 56, 23, 89, 2, 5, 99, 12];
const highestNumber: number = getHighestNumber(sampleNumbers);
console.log(`The highest number is: ${highestNumber}`);


// task6
console.log("---------------------------------task 6---------------------------------");
function createImageNames(baseName: string, count: number): string[] {
    let imageNames: string[] = [];
    for (let i = 1; i <= count; i++) {
        imageNames.push(`${baseName}-00${i}.jpg`);
    }
    return imageNames;
}
const imageNames: string[] = createImageNames('vacation', 15);
imageNames.forEach((name, index) => console.log(`${index+1}: ${name}`));

// task7
console.log("---------------------------------task 7---------------------------------");
const numberOfO = document.getElementById('oGenerator') as HTMLInputElement;
const numberButton = document.getElementById('numberButton') as HTMLButtonElement;
const output7 = document.getElementById('outputTask7')!;
if (!numberButton || !numberOfO ) {
    throw new Error('please enter a number and then submit');
}
function oGenerators (): void {
   
    
    
    numberButton.addEventListener('click',() => {
        output7.innerHTML = '';
        const oLength = Number(numberOfO.value);
        if (!oLength || oLength <= 0) {
        output7.textContent = 'No number is being found.';
        return;
    }
        let result = '';
        for (let i=0; i<oLength; i++) {
            result += 'o'
        }
        const p7 = document.createElement('p');
        p7.textContent = 'l' + result + 'p';
        output7.appendChild(p7);
    })
    
}
oGenerators();


// task8
console.log("---------------------------------task 8---------------------------------");
function getNumberOfVowels(input:string): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    let count: number = 0;
    for (const char of input.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;    
        }
    }
    return count;
}
console.log(getNumberOfVowels("hello world"))
console.log(getNumberOfVowels("It's a beautiful day"))


// task9
console.log("---------------------------------task 9---------------------------------");
function addToFifty(): void {
    // let randomNumbers: number[] = [];
    let sum: number = 0;
    while (sum < 50) {
        for (let i = 0; i < 10; i++) {
            const randomNum: number = Math.floor(Math.random() * 10) + 1;
            // randomNumbers.push(randomNum);
            sum += randomNum;
            console.log(`Added ${randomNum}, current sum: ${sum}`);
        if (sum >= 50) {
            console.log( `${sum} > 50. Stopping right here.`);
            break;
        }
    }
}
}
addToFifty();























