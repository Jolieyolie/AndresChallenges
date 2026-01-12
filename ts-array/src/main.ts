import './style.css'

// task1
console.log(`task-----1`)
const bucketList: string[] = ['Oslo', 'Reykjavik', 'London'];
const luckyNumber: number[] = [7, 11, 13];
const favoritePeople: string[] = ['Eddie', 'Maomao', 'Anya'];
console.log(bucketList);
console.log(luckyNumber);
console.log(favoritePeople);

// task2
console.log(`task-----2`)
console.log(bucketList[2]);
console.log(luckyNumber[1]);
console.log(favoritePeople[0]);

// task3
console.log(`task-----3`)
console.log(bucketList.length)
console.log(luckyNumber.length)
console.log(favoritePeople.length)

// task4
console.log(`task-----4`)
const count = bucketList.push('Helsinki', 'Tokyo');
console.log(bucketList);
console.log(count);
bucketList.forEach((item,index) => {
    console.log(`${index}:` + ` "${item}"` );
});

// task5
console.log(`task-----5`)
console.log(bucketList);
const removedItem = bucketList.pop();
console.log(`Removed item: "${removedItem}"`);
console.log(bucketList);

// task6
console.log(`task-----6`)
console.log(bucketList);
const firstItem = bucketList.shift();
console.log(`Removed first item: "${firstItem}"`);
console.log(bucketList);

// task7
console.log(`task-----7`)
console.log(bucketList);
console.log(`length before unshift: ${bucketList.length}`)
bucketList.forEach((item,index) => {
    console.log(`${index}:` + ` "${item}"` );
});
const newCount = bucketList.unshift('Osaka', 'Hokkaido');
console.log(`new length after 1 unshift: ${newCount}`);
console.log(bucketList);
bucketList.forEach((item,index) => {
    console.log(`${index}:` + ` "${item}"` );
});


// task8
console.log(`task-----8`)
const favoriteTravelDestinations: string[] = ['Bali', 'Maldive', 'New York', 'Sydney', 'Hawaii'];
const notFavoriteTravelDestinations: string[] = favoriteTravelDestinations.slice(2,4);
favoriteTravelDestinations.forEach((item,index) => {
    console.log(`${index}:` + ` "${item}"` );
});
console.log(`length:${favoriteTravelDestinations.length}`)
notFavoriteTravelDestinations.forEach((item,index) => {
    console.log(`${index}:` + ` "${item}"` );
});
console.log(`length:${notFavoriteTravelDestinations.length}`)

// task9
console.log(`task-----9`)
const fixedNumbers: number[] = [23, 54, 75];
console.log(fixedNumbers)
const addRearNumbersCount: number = fixedNumbers.push(89, 67, 103, 37, 61);
console.log(`fixedNumbers after push: ${addRearNumbersCount} [${fixedNumbers}]`);
const addFrontNumbersCount: number = fixedNumbers.unshift(12, 45, 78, 90, 16);
console.log(`fixedNumbers after unshift: ${addFrontNumbersCount} [${fixedNumbers}]`);
const removedRearNumber: (number | undefined)[] = [fixedNumbers.pop(), fixedNumbers.pop()];
console.log(`fixedNumbers after pop: ${fixedNumbers.length} [${fixedNumbers}]`);
console.log(`popped numbers: ${removedRearNumber}`)
const removedFrontNumber: (number | undefined)[] = [fixedNumbers.shift(), fixedNumbers.shift()];
console.log(`fixedNumbers after shift: ${fixedNumbers.length} [${fixedNumbers}]`);
console.log(`shifted numbers: ${removedFrontNumber}`)

// task10
console.log(`task-----10`)
const oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor",  "Cary Grant", "Paul Newman", "Doris Day"];
const actorsReference: string[] = [...oldHollywoodActors, "Marilyn Monroe"];
console.log(oldHollywoodActors)
console.log(actorsReference)
const concatOldHollywoodActors: string[] =oldHollywoodActors.concat();
const sliceoldHollywoodActors: string[] = oldHollywoodActors.slice();
const spreadOldHollywoodActors: string[] = [...oldHollywoodActors];
concatOldHollywoodActors[2] = "Grace Kelly";
sliceoldHollywoodActors[3] = "James Dean";
spreadOldHollywoodActors[4] = "Humphrey Bogart";
console.log(`original array: ${oldHollywoodActors}`)
console.log(`copy from concat: ${concatOldHollywoodActors}`)
console.log(`copy from slice: ${sliceoldHollywoodActors}`)
console.log(`copy from spread: ${spreadOldHollywoodActors}`)

// task11
console.log(`task-----11`)
const futuramaQuote: string = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
const sentences: string[] = futuramaQuote.split('.');
sentences.forEach((sentence, index) => {
  console.log(`${index}: "${sentence.trim()}"`);
})
console.log(`Total sentences: ${sentences.length}`);

const words: string[] = futuramaQuote.split(' ');
words.forEach((word, index) => {
  console.log(`${index}: "${word.trim()}"`);
})
console.log(`Total words: ${words.length}`);

const characters: string[] = futuramaQuote.split('');
characters.forEach((char, index) => {
  console.log(`${index}: "${char}"`);
})
console.log(`Total characters: ${characters.length}`);