import type { IAnimalContract } from "../interfaces/animalContract";
import type { AnimalKind, EnclosureKind } from "../typeClass";

export class MainAnimal implements IAnimalContract {
        emoji: string;  
        name: string;
        species: string;
        kind: AnimalKind;
        yearOfBirth: number;
        origin: string;
        specialNeed: string;
        enclosure: EnclosureKind;
        
        constructor(emoji: string,  
            name: string,
            species: string,
            kind: AnimalKind,
            yearOfBirth: number,
            origin: string,
            specialNeed: string,
            enclosure: EnclosureKind) {
                this.emoji = emoji;
                this.name = name;
                this.species = species;
                this.kind = kind;
                this.yearOfBirth = yearOfBirth;
                this.origin = origin;
                this.specialNeed = specialNeed;
                this.enclosure = enclosure;
            }
}

