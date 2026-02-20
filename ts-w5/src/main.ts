import './style.css'

// task1 objects-ts-1
console.log("-----------------------task1-----------------------")
type Pet = {
  animal_type: string;
  names: string[];
};

const ourPets: Pet[] = [
  {
    animal_type: 'Cat',
    names: ['Gipsy', 'Nala', 'Dinky']
  },
  {
    animal_type: 'Dog',
    names: ['Knöpfchen', 'Pinselchen', 'Droopy']
  }
];
console.log(ourPets[0].names[1])
console.log(`${ourPets[0].names},${ourPets[0].names}`)
ourPets[0].names.forEach((pet, index) =>{
  console.log(`${index}:${pet}`)
})
ourPets[1].names.forEach((pet, index) =>{
  console.log(`${index}:${pet}`)
})

ourPets[0].names[2] = "Pinky";
ourPets[1].names[2] = "Snoopy";
console.log(ourPets[0].names[2]);
console.log(ourPets[1].names[2]);

const hamster: Pet = {
  animal_type: 'hamster',
  names: ['Balu']
}
ourPets.push(hamster)
console.log(ourPets)

// task2 objects-ts-2
type Storage = {
    desk: {
        drawer: string;
    };
    cabinet: {
        "Upper Drawer": {
            Folder1: string;
            Folder2: string;
        };
        "Lower Drawer": string;
    };
};

const ourStorage: Storage = {
    desk: {
        drawer: "Binder"
    },
    cabinet: {
        "Upper Drawer": {
            Folder1: "Documents",
            Folder2: "Secrets"
        },
        "Lower Drawer": "Glue"
    }
};
console.log(ourStorage.cabinet["Upper Drawer"].Folder2)
console.log(ourStorage.cabinet["Lower Drawer"])
console.log(ourStorage.desk.drawer)

// task3 objects-ts-3
type Music = {
  artist: string;
  title: string;
  releaseYear: number;
  formats: string[];
  gold: boolean;
};

const myTopFour: Music[] = [
  {
    artist: 'The Beatles',
    title: 'Abbey Road',
    releaseYear: 1969,
    formats: ['LP', 'CD', 'MC', 'Download'],
    gold: true
  },
  {
    artist: 'Pink Floyd',
    title: 'Dark Side of the Moon',
    releaseYear: 1978,
    formats: ['CS', 'CD', 'LP', 'Download'],
    gold: true
  },
  {
    artist: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    releaseYear: 1971,
    formats: ['CS', 'LP', 'Download'],
    gold: true
  },
  {
    artist: 'Metallica',
    title: "Kill ’Em All and Ride the Lightning",
    releaseYear: 1983,
    formats: ['LP', 'CD', 'MC', 'Download'],
    gold: true
  }
];

console.log(myTopFour[0].artist);
console.log(myTopFour[1].formats[3]);
console.log(myTopFour[1].gold);
console.log(myTopFour[2].releaseYear)
console.log(myTopFour[3].releaseYear)
console.log(myTopFour[3].formats[2]);
console.log(myTopFour[3].title.split(" ")[4])


// task4 objects-ts-4
console.log("-----------------------task4-----------------------")
myTopFour.forEach(music=> {
  if (music.releaseYear < 1975){
    console.log("older than 1975", music)
  }
  console.log(music.artist);
  console.log(music.title);
  console.log(music.formats.join(", "));
  console.log("_____________________")

})

// task5 objects-ts-5
console.log("-----------------------task5-----------------------")
type Address = {
    street: string;
    city: string;
    postalCode: string;
};

type Student = {
    name: string;
    age: number;
    coop: boolean;
    address: Address;
    emails: string[];
};

const studentData: Student[] = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];
function printStudentData (student: Student): void {
  console.log("name:", student.name)
  console.log("coop:", student.coop)
  console.log("city:", student.address.city)
  console.log("email:", student.emails)
}
studentData.forEach(student => {
  printStudentData(student)
})


// task6 objects-ts-6
console.log("-----------------------task6-----------------------")
type PreciousMetalPrice = {
  name: string;
  pricePerGramEuro: number;
  change: string;
};

const preciousMetalPrices: PreciousMetalPrice[] = [
  { name: "Gold", pricePerGramEuro: 42.91, change: "+0.12%" },
  { name: "Silver", pricePerGramEuro: 0.51, change: "+1.02%" },
  { name: "Platinum", pricePerGramEuro: 25.74, change: "+0.41%" },
  { name: "Palladium", pricePerGramEuro: 50.93, change: "0.00%" },
  { name: "Rhodium", pricePerGramEuro: 160.12, change: "-0.10%" },
  { name: "Iridium", pricePerGramEuro: 42.84, change: "0.00%" },
  { name: "Ruthenium", pricePerGramEuro: 7.36, change: "0.00%" },
  { name: "Rhenium", pricePerGramEuro: 37.22, change: "-0.53%" },
  { name: "Osmium", pricePerGramEuro: 11.54, change: "0.00%" }
];
let namesForEach: string[] = [];
preciousMetalPrices.forEach(metal => {
  namesForEach.push(metal.name)
})
console.log("Names (forEach):",namesForEach)

let namesMap: string[] = preciousMetalPrices.map(metal => metal.name);
console.log("Names (map):",namesMap)

let priceForEach: number[] = [];
preciousMetalPrices.forEach(metal => {
  priceForEach.push(metal.pricePerGramEuro)
})
console.log("price(forEach)", priceForEach)

let priceMap: number[] = preciousMetalPrices.map(metal => metal.pricePerGramEuro)
console.log("price(map)", priceMap)

let changeForEach: string[] = [];
preciousMetalPrices.forEach(metal=>{
  changeForEach.push(metal.change)
})
console.log("change(forEach)", changeForEach)

let changeMap: string[] = preciousMetalPrices.map(metal=> metal.change)
console.log("change(map)", changeMap)

const priceAbove50 = preciousMetalPrices.filter(metal=> metal.pricePerGramEuro > 50)
console.log("price > 50", priceAbove50)

const tableBody = document.getElementById("metal-table");
preciousMetalPrices.forEach(metal=> {
  const row = document.createElement("tr");

  row.innerHTML = `
  <td>${metal.name}</td>
  <td>${metal.pricePerGramEuro}</td>
  <td>${metal.change}</td>
`;
  tableBody?.appendChild(row)
})

// task7 objects-ts-7
console.log("-----------------------task7-----------------------")
type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

const sortedByName = [...singers].sort((a,b) => a.name.localeCompare(b.name))
console.log("sorted alphabetically by name")
console.log(sortedByName)

const sortedByCareerStart = [...singers].sort((a,b)=> a.period_active.start -b.period_active.start)
console.log("sorted by career start")
console.log(sortedByCareerStart)


// task8 objects-ts-8
console.log("-----------------------task8-----------------------")
const singerTableBody = document.getElementById("table-container");
function renderTable(singers: Singer[]): void {
  singerTableBody!.innerHTML = "";
  singers.forEach(singer=> {
    const singerRow = document.createElement("tr")

    singerRow.innerHTML = `
      <td>${singer.name}</td>
      <td>${singer.country}</td>
      <td>${singer.period_active.start}-${singer.period_active.end}</td>
      <td>${singer.genre}</td>
    `;
    singerTableBody?.appendChild(singerRow)
})
}

renderTable(singers)
// task9 objects-ts-9
console.log("-----------------------task9-----------------------")
document.getElementById("nameAsc")!.addEventListener("click", () => sortByName("asc"));
document.getElementById("nameDesc")!.addEventListener("click", () => sortByName("desc"));

document.getElementById("countryAsc")!.addEventListener("click", () => sortByCountry("asc"));
document.getElementById("countryDesc")!.addEventListener("click", () => sortByCountry("desc"));

document.getElementById("genreAsc")!.addEventListener("click", () => sortByGenre("asc"));
document.getElementById("genreDesc")!.addEventListener("click", () => sortByGenre("desc"));

const singerNew :Singer[] = singers.map(singer => ({
  ...singer,
  period_active: { ...singer.period_active }
}));
function sortByName(direction: "asc" | "desc"): void {
  singerNew.sort((a, b) => 
    direction === "asc" ? 
    a.name.localeCompare(b.name) 
    : b.name.localeCompare(a.name)
);
  renderTable(singerNew);
}

function sortByCountry(direction: "asc" | "desc"): void {
  singerNew.sort((a, b) => 
    direction === "asc" ?
    a.country.localeCompare(b.country)
    : b.country.localeCompare(a.country)
);
  renderTable(singerNew);
}

function sortByGenre(direction: "asc" | "desc"): void {
  singerNew.sort((a, b) => 
    direction === "asc" ?
    a.genre.localeCompare(b.genre)
    : b.genre.localeCompare(a.genre)
);
  renderTable(singerNew); 
}

renderTable(singers)

// task10 objects-ts-10
console.log("-----------------------task10-----------------------")
const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const searchButton = document.getElementById("search-button")!;
function searchSingers(): void {
  const query = searchInput.value.toLowerCase();
  const filtered = singers.filter(singer =>
    singer.name.toLowerCase().includes(query)
  );
  renderTable(filtered)
}
searchButton.addEventListener("click", searchSingers);


// task1 Math-ts-1
console.log("-----------------------task11-----------------------")
const pi: number = Math.PI;
console.log(pi)
const piFixed: string = pi.toFixed(2);
console.log(piFixed)


// task2 Math-ts-2
console.log("-----------------------task12-----------------------")
const randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];
function roundNumber(num: number[]): void {
  num.forEach(n => {
    console.log(`Original: ${n}, Rounded: ${Math.round(n)}`)
  }
)}
roundNumber(randomNumbers)

// task3 Math-ts-3
console.log("-----------------------task13-----------------------")
const randomNum: number = Math.random();
console.log(randomNum)
const randomNum10 : number = Math.floor(Math.random() * 10) + 1;
console.log(randomNum10)
const randomNUm100 : number = Math.floor(Math.random() * 100) + 1;
console.log(randomNUm100)

// task4 Math-ts-4
console.log("-----------------------task14-----------------------")
const numbers: number[] = [399,10,186,45,9,171,491,128,24,288,56,444,217,111,187,89,270,485,481,179,290,14,292,250,463,189,434,184,124,443,119,23,453,305,68,477,58,90,347,147,64,259,131,153,29,116];
console.log(numbers)
const minNum: number = Math.min(...numbers)
console.log(minNum)
const maxNum:number = Math.max(...numbers)
console.log(maxNum)

// task4 Math-ts-5
console.log("-----------------------task15-----------------------")

const weightInput = document.getElementById("weight") as HTMLInputElement
const heightInput = document.getElementById("height") as HTMLInputElement
const submitButton = document.getElementById("submit") as HTMLButtonElement
const outputDiv = document.getElementById("output") as HTMLDivElement;
submitButton.addEventListener("click", ()=> {
  const weightKg = parseFloat(weightInput.value);
  const heightM = parseFloat(heightInput.value);
  if (isNaN(weightKg) || isNaN(heightM) || heightM <= 0 || weightKg <= 0) {
    console.log("please enter a valid number above 0")
  }
  else {
    const bmi = weightKg / (heightM * heightM);
    const roundedBmi = Math.round(bmi * 100) / 100;
    let category: string;
    if (roundedBmi < 18.5) {
      category = "underweight";
    } else if (roundedBmi >= 18.5 && roundedBmi < 24.9) {
      category = "normal weight";
    } else if (roundedBmi >= 25.0 && roundedBmi < 29.9) {
      category = "overweight";
    } else {
      category = "obesity";
    }
      outputDiv.innerHTML = `
      <p><strong>Weight:</strong> ${weightKg} kg</p>
      <p><strong>Height:</strong> ${heightM} m</p>
      <p><strong>BMI:</strong> ${roundedBmi}</p>
      <p><strong>Category:</strong> ${category}</p>
    `;
  }
})




















