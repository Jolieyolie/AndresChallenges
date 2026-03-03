import './style.css'
import { enclosures } from './typeClass';
import { MainAnimal } from './classes/mainAnimal';
import ANIMAL_CATALOG from './classes/animalCatalog';


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
        optionContinent.textContent = origin

        continent.appendChild(optionContinent)
    })
}
// enclosure option
const enclosure = document.getElementById("enclosureSelect") as HTMLSelectElement;
if (enclosure instanceof HTMLSelectElement) {
    enclosures.forEach((kind) => {
        const option: HTMLOptionElement = document.createElement("option")
        option.value = kind.getId().toString()
        option.textContent = kind.getLabel()
        enclosure.appendChild(option)
    })
}

// add btn
const addedList: MainAnimal[] = [];
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;

if (addBtn instanceof HTMLButtonElement) {
    addBtn.addEventListener("click", ()=> {
        const speciesSelect = document.getElementById("speciesSelect") as HTMLSelectElement;
        const nameInput = document.getElementById("nameInput") as HTMLInputElement;
        const birthInput = document.getElementById("birthInput") as HTMLInputElement;
        const continentSelect = document.getElementById("continentSelect") as HTMLSelectElement;
        const enclosureSelect = document.getElementById("enclosureSelect") as HTMLSelectElement;
        const needsInput = document.getElementById("needsInput") as HTMLInputElement;
        
        const selectedAnimal = ANIMAL_CATALOG.find(
            (animal) => animal.species === speciesSelect.value
        )
        const enclosureId = Number(enclosureSelect.value)
        const selectedEnclosure = enclosures.find((item) => item.getId() === enclosureId)
        const birthYear = Number(birthInput.value)
        const cleanName = nameInput.value.trim()

        if (!cleanName || Number.isNaN(birthYear) || !selectedAnimal || !selectedEnclosure) {
            alert('Please enter valid animal data before adding.')
            return
        }

        const newAnimal: MainAnimal = new MainAnimal (
            selectedAnimal.emoji,
            cleanName,
            selectedAnimal.species,
            selectedAnimal.kind,
            birthYear,
            continentSelect.value,
            needsInput.value.trim(),
            {
                id: selectedEnclosure.getId(),
                label: selectedEnclosure.getLabel(),
                capacity: selectedEnclosure.getCapacity(),
            }
        )
            
        addedList.push(newAnimal);
        renderMoveOptions();


        console.log("added:", newAnimal)
        console.log("All animals:", addedList)
        })
}
const bella = new MainAnimal('🐻', 'Bella', 'bear', 'Mammal', 2008, 'Africa', 'eating berries', {id:1, label:'Jungle Habitat', capacity:3} )

console.log(bella)
// animal selection 
const moveOption = document.getElementById("moveOption") as HTMLSelectElement;
const targetOption = document.getElementById("targetOption") as HTMLSelectElement;
const moveBtn = document.getElementById("moveBtn") as HTMLButtonElement;

const renderMoveOptions = (): void => {
    if (!(moveOption instanceof HTMLSelectElement)) return;

    moveOption.innerHTML = "";

    addedList.forEach((animal, index)=> {
        const option: HTMLOptionElement = document.createElement("option");

        option.value = index.toString();
        option.textContent = `${animal.emoji} ${animal.name} - ${animal.species} (${animal.enclosure.label})`

        moveOption.appendChild(option);
})
}


// target enclosure selection
const renderTargetOptions = (): void => {
    if (!(targetOption instanceof HTMLSelectElement)) return;
    targetOption.innerHTML = "";
    enclosures.forEach((enclosure) => {
        const option = document.createElement("option")
        option.value = enclosure.getId().toString();
        option.textContent = enclosure.getLabel();
        targetOption.appendChild(option)
})
};
renderTargetOptions();
renderMoveOptions();
// move btn
if (
    moveBtn instanceof HTMLButtonElement &&
    moveOption instanceof HTMLSelectElement &&
    targetOption instanceof HTMLSelectElement
) {
    moveBtn.addEventListener("click", () => {
        const animalIndex = Number(moveOption.value);
        const targetEnclosureId = Number(targetOption.value);

        if (
            Number.isNaN(animalIndex) ||
            Number.isNaN(targetEnclosureId) ||
            !addedList[animalIndex]
        ) {
            alert("Please choose a valid animal and target enclosure.");
            return;
        }

        const targetEnclosure = enclosures.find(
            (item) => item.getId() === targetEnclosureId
        );

        if (!targetEnclosure) {
            alert("Selected enclosure was not found.");
            return;
        }

        const targetCount = addedList.filter(
            (animal) => animal.enclosure.id === targetEnclosureId
        ).length;

        if (targetCount >= targetEnclosure.getCapacity()) {
            alert(`Cannot move. ${targetEnclosure.getLabel()} is full.`);
            return;
        }

        addedList[animalIndex].enclosure = {
            id: targetEnclosure.getId(),
            label: targetEnclosure.getLabel(),
            capacity: targetEnclosure.getCapacity(),
        };

        renderMoveOptions();
        moveOption.value = animalIndex.toString();

        console.log("Moved:", addedList[animalIndex]);
        console.log("All animals:", addedList);
    });
}
