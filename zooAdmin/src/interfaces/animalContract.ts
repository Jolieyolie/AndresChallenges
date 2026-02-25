import type { EnclosureKind, AnimalKind} from "../typeClass"

export interface IAnimalContract {
    emoji: string;  
    name: string;
    species: string;
    kind: AnimalKind;
    yearOfBirth: number;
    origin: string;
    specialNeed: string;
    enclosure: EnclosureKind;
}