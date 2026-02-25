import './style.css'
import { enclosures, type EnclosureKind  } from './typeClass';

import { MainAnimal } from './classes/mainAnimal';
import ANIMAL_CATALOG from './classes/animalCatalog';
// import { Enclosure } from './classes/enclosure';

// Add animal

// species option
const species = document.getElementById("speciesSelect") as HTMLSelectElement;
if (species instanceof HTMLSelectElement) {
    ANIMAL_CATALOG.forEach((animal)=> {
        const optionSpecies: HTMLOptionElement = document.createElement("option");

        optionSpecies.value = animal.species;
        optionSpecies.textContent = `${animal.species} ${animal.emoji} (${animal.kind})`

        species.appendChild(optionSpecies);
})
}
// continent option
const continent = document.getElementById("continentSelect") as HTMLSelectElement;
if (continent instanceof HTMLSelectElement) {
    const uniqueContinent = [... new Set(ANIMAL_CATALOG.map(animal => animal.origin))]
   uniqueContinent.forEach((origin) => {
        const optionContinent: HTMLOptionElement = document.createElement("option")

        optionContinent.value = origin
        optionContinent.textContent = `${origin}`

        continent.appendChild(optionContinent)
    })
}
// enclosure option
const enclosure = document.getElementById("enclosureSelect") as HTMLSelectElement;
if (enclosure instanceof HTMLSelectElement) {
    enclosures.forEach((kind) => {
        const option: HTMLOptionElement = document.createElement("option")
        option.value = kind.getLabel()
        option.textContent = kind.getLabel()
        enclosure.appendChild(option)
    })
}


const addedList: MainAnimal[] = [];
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
if(addBtn instanceof HTMLButtonElement) {
    addBtn.addEventListener("click", ()=> {
        const speciesSelect = document.getElementById("speciesSelect") as HTMLSelectElement;
        const nameInput = document.getElementById("nameInput") as HTMLInputElement;
        const birthInput = document.getElementById("birthInput") as HTMLInputElement;
        const continentSelect = document.getElementById("continentSelect") as HTMLSelectElement;
        const enclosureSelect = document.getElementById("enclosureSelect") as HTMLSelectElement;
        const needsInput = document.getElementById("needsInput") as HTMLInputElement;
        
        const newAnimal: MainAnimal = {
            emoji: '🦁',
            name: nameInput.value,
            species: speciesSelect.value,
            kind: 'Mammal',
            yearOfBirth: Number(birthInput.value),
            origin: continentSelect.value,
            specialNeed: needsInput.value,
            enclosure: enclosureSelect.value as unknown as EnclosureKind,
        }

        addedList.push(newAnimal);

        console.log("added:", newAnimal)
        console.log("All animals:", addedList)
        })
}
const bella = new MainAnimal('🐻', 'Bella', 'bear', 'Mammal', 2008, 'Africa', 'eating berries', {id:1, label:'Jungle Habitat', capacity:3} )

console.log(bella)