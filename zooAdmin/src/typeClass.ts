import { Enclosure } from "./classes/enclosure";

export type AnimalKind = 'Mammal' | 'Bird' | 'Reptile' | 'Aquatic' | 'Other';

export type EnclosureKind = {
   id: number;
   label: string;
   capacity: number;
};
const savannah = new Enclosure(1,'Savannah Habitat', 5);
const jungle = new Enclosure(2, 'Jungle Habitat', 8);
const arctic = new Enclosure(3, 'Arctic landscape', 6)
const marine = new Enclosure(4, 'Marine', 10);
const desert = new Enclosure(5, 'Desert', 4);
const forest = new Enclosure(6, 'Rain Forest', 7)
export const enclosures: Enclosure[] = [savannah, jungle, arctic,  marine, desert, forest]

// export const ENCLOSURE_KINDS: EnclosureKind = {
//  {id:1,'Savannah Habitat', 3},
// 2:'Jungle Habitat',
// 3:'Arctic landscape',
//  4:'Marine',
// 5:'Desert',
//  6:'Rain Forest'
// } as const;
// export type EnclosureKind = typeof ENCLOSURE_KINDS[number];

// export type AnimalList = Omit<AnimalCatalogItem, "emoji" | "kind"> & {
//   name: string;
//   yearOfBirth: number;
//   enclosure: EnclosureKind;
//   specialNeed: string;
// }

// export type Enclosure = 'Aquatic Habitat(Aquatic)' | 'Savannah Habitat(Mammal)'
