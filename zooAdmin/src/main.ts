import './style.css'
import type { AnimalKind, AnimalCatalogItem, AnimalList, EnclosureKind  } from './typeClass';
import { ANIMAL_CATALOG,  ENCLOSURE_KINDS } from './typeClass'

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
    ENCLOSURE_KINDS.forEach((kind) => {
        const option: HTMLOptionElement = document.createElement("option")
        option.value = kind
        option.textContent = kind
        enclosure.appendChild(option)
    })
}


const addedList: AnimalList[] = [];
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
if(addBtn instanceof HTMLButtonElement) {
    addBtn.addEventListener("click", ()=> {
        const speciesSelect = document.getElementById("speciesSelect") as HTMLSelectElement;
        const nameInput = document.getElementById("nameInput") as HTMLInputElement;
        const birthInput = document.getElementById("birthInput") as HTMLInputElement;
        const continentSelect = document.getElementById("continentSelect") as HTMLSelectElement;
        const enclosureSelect = document.getElementById("enclosureSelect") as HTMLSelectElement;
        const needsInput = document.getElementById("needsInput") as HTMLInputElement;
        
        const newAnimal: AnimalList = {
            species: speciesSelect.value,
            name: nameInput.value,
            yearOfBirth: Number(birthInput.value),
            origin: continentSelect.value,
            enclosure: enclosureSelect.value as EnclosureKind,
            specialNeed: needsInput.value
        }

        addedList.push(newAnimal);

        console.log("added:", newAnimal)
        console.log("All animals:", addedList)
        })
}


