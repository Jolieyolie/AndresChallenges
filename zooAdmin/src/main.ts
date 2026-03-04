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
        renderEnclosureLists();


        console.log("added:", newAnimal)
        console.log("All animals:", addedList)
        })
}
// animal selection 
const moveOption = document.getElementById("moveOption") as HTMLSelectElement;
const targetOption = document.getElementById("targetOption") as HTMLSelectElement;
const moveBtn = document.getElementById("moveBtn") as HTMLButtonElement;
const ENCLOSURE_CONTAINER_IDS: Record<number, string> = {
    1: "Savannah",
    2: "Jungle",
    3: "Arctic",
    4: "Marine",
    5: "Desert",
    6: "RainForest",
};

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

const renderEnclosureLists = (): void => {
    const currentYear = new Date().getFullYear();
    const occupancyByEnclosure = new Map<number, number>();

    addedList.forEach((animal) => {
        const currentCount = occupancyByEnclosure.get(animal.enclosure.id) ?? 0;
        occupancyByEnclosure.set(animal.enclosure.id, currentCount + 1);
    });

    enclosures.forEach((enclosure) => {
        const enclosureId = enclosure.getId();
        const containerId = ENCLOSURE_CONTAINER_IDS[enclosureId];
        if (!containerId) return;

        const enclosureCard = document.getElementById(containerId);
        if (!(enclosureCard instanceof HTMLDivElement)) return;

        const currentOccupancy = occupancyByEnclosure.get(enclosureId) ?? 0;
        const enclosureTitle = enclosureCard.querySelector("p");

        if (enclosureTitle instanceof HTMLParagraphElement) {
            enclosureTitle.textContent = `${enclosure.getLabel()} (${currentOccupancy}/${enclosure.getCapacity()})`;
        }

        const listElement = enclosureCard.querySelector(".animalList");
        if (!(listElement instanceof HTMLDivElement)) return;

        listElement.innerHTML = "";

        const animalsInEnclosure = addedList.filter(
            (animal) => animal.enclosure.id === enclosureId
        );

        animalsInEnclosure.forEach((animal) => {
            const animalCard = document.createElement("div");
            animalCard.className = "border border-gray-200 rounded-lg p-2 mt-2";

            const animalInfo = document.createElement("p");
            const age = Math.max(0, currentYear - animal.yearOfBirth);
            animalInfo.textContent =
                `${animal.emoji} ${animal.name} ${animal.species} (${age} - ${animal.origin})`;
            animalCard.appendChild(animalInfo);

            const needsWrap = document.createElement("div");
            needsWrap.className = "flex flex-wrap gap-2 mt-2";

            const parsedNeeds = animal.specialNeed
                .split(/[,;\n]+/)
                .map((need) => need.trim())
                .filter((need) => need.length > 0);

            if (parsedNeeds.length === 0) {
                const emptyNeedBadge = document.createElement("span");
                emptyNeedBadge.className = "text-xs bg-gray-100 border border-gray-200 rounded-full px-2 py-1";
                emptyNeedBadge.textContent = "No special needs";
                needsWrap.appendChild(emptyNeedBadge);
            } else {
                parsedNeeds.forEach((need) => {
                    const needBadge = document.createElement("span");
                    needBadge.className = "text-xs border border-gray-300 rounded-full px-2 py-1";
                    needBadge.textContent = need;
                    needsWrap.appendChild(needBadge);
                });
            }

            animalCard.appendChild(needsWrap);
            listElement.appendChild(animalCard);
        });
    });
};

renderTargetOptions();
renderMoveOptions();
renderEnclosureLists();

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

        if (addedList[animalIndex].enclosure.id === targetEnclosureId) {
            alert("Animal is already in this enclosure.");
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
        renderEnclosureLists();
        moveOption.value = animalIndex.toString();

        console.log("Moved:", addedList[animalIndex]);
        console.log("All animals:", addedList);
    });
}
