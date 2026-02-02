const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ['Alice', 'Bob', 'Charlie'];
const users  = [{id: 1, name: 'David'}, {id: 2, name: 'Eva'}, {id: 3, name: 'Frank'}];


// Using a for...of loop to iterate over the array
for (const user of users) {
    console.log(`For...of Loop - User: ${user}`);
}

// Using a for loop to iterate over the array
for (let i = 0; i < numbers.length; i++) {
    console.log(`For Loop - Number: ${numbers[i]}`);
}

const attempts = ['okay', 'still okay', 'ok'];
let idx = 0
let value = attempts[idx]

while (value !== 'third') {
    idx += 1;
    value = attempts[idx];
    console.log(`Accepted: ${value}`);

}

// break, continue
let firstEvenNumber: number | undefined;
for (let i = 0; i < numbers.length; i++ )  {
    if (numbers[i] % 2 !== 0) {
        continue; // Skip odd numbers
    }
    firstEvenNumber = numbers[i];
    break; // Exit loop after finding the first even number
}
console.log({firstEvenNumber});

// for ... of, for ... in
let numTest = 0;
for (const name of names) {
    console.log(`${numTest++}. Name: ${name}`);
}

for (const index in names) {
    console.log(`Index: ${index}, Name: ${names[index]}`);
}
const user = {id: 1, name: 'Alice', age: 30};
for (const key in user) {
    console.log(`Key: ${key}, Value: ${user[key as keyof typeof user]}`);
}

// do ... while
let count = 0;
do {
    console.log(`Count is: ${count}`);
    count++;
} while (count < 3);

// Nested loops
for (const user of users) {
    for (const char of user.name) {
        console.log(`User: ${user.name}, Character: ${char}`);
    }
}
