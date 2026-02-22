export type AnimalKind = 'Mammal' | 'Bird' | 'Reptile' | 'Aquatic' | 'Other';

export type AnimalCatalogItem = {
  emoji: string;
  species: string;
  kind: AnimalKind;
  origin: string;
}; 

export const ENCLOSURE_KINDS = [
  'Savannah Habitat',
  'Jungle Habitat',
  'Arctic landscape',
  'Marine',
  'Desert',
  'Rain Forest'
] as const;
export type EnclosureKind = typeof ENCLOSURE_KINDS[number];

export type AnimalList = Omit<AnimalCatalogItem, "emoji" | "kind"> & {
  name: string;
  yearOfBirth: number;
  enclosure: EnclosureKind;
  specialNeed: string;
}



// export type Enclosure = 'Aquatic Habitat(Aquatic)' | 'Savannah Habitat(Mammal)'
export const ANIMAL_CATALOG: AnimalCatalogItem[] = [
  { emoji: '🦁', species: 'Lion', kind: 'Mammal', origin: 'Africa' },
  { emoji: '🐘', species: 'Elephant', kind: 'Mammal', origin: 'Africa' },
  { emoji: '🐻', species: 'Bear', kind: 'Mammal', origin: 'Europe' },
  { emoji: '🐒', species: 'Monkey', kind: 'Mammal', origin: 'Africa' },
  { emoji: '🐬', species: 'Dolphin', kind: 'Aquatic', origin: 'Oceans' },
  { emoji: '🐍', species: 'Snake', kind: 'Reptile', origin: 'Africa' },
  { emoji: '🐢', species: 'Turtle', kind: 'Reptile', origin: 'Africa' },
  { emoji: '🐊', species: 'Crocodile', kind: 'Reptile', origin: 'Africa' },
  { emoji: '🐦', species: 'Parrot', kind: 'Bird', origin: 'Africa' },
  { emoji: '🦅', species: 'Eagle', kind: 'Bird', origin: 'Africa' },
  { emoji: '🦜', species: 'Macaw', kind: 'Bird', origin: 'Africa' },
  { emoji: '🐠', species: 'Fish', kind: 'Aquatic', origin: 'Oceans' },
  { emoji: '🐟', species: 'Trout', kind: 'Aquatic', origin: 'Oceans' },
  { emoji: '🦈', species: 'Shark', kind: 'Aquatic', origin: 'Oceans' },
  { emoji: '🐙', species: 'Octopus', kind: 'Aquatic', origin: 'Oceans' },
  { emoji: '🦑', species: 'Squid', kind: 'Aquatic', origin: 'Oceans' },
  { emoji: '🐸', species: 'Frog', kind: 'Other', origin: 'Africa' },
  { emoji: '🦎', species: 'Lizard', kind: 'Reptile', origin: 'Africa' },
  { emoji: '🦢', species: 'Swan', kind: 'Bird', origin: 'Europe' },
  { emoji: '🦆', species: 'Duck', kind: 'Bird', origin: 'Europe' },
  { emoji: '🤡', species: 'Clownfish', kind: 'Aquatic', origin: 'Oceans' },
  { emoji: '🐅', species: 'Tiger', kind: 'Mammal', origin: 'Africa' },
  { emoji: '🦏', species: 'Rhinoceros', kind: 'Mammal', origin: 'Africa' },
  { emoji: '🐊', species: 'Alligator', kind: 'Reptile', origin: 'Africa' },
  { emoji: '🦜', species: 'Cockatoo', kind: 'Bird', origin: 'Africa' },
  { emoji: '🐡', species: 'Pufferfish', kind: 'Aquatic', origin: 'Oceans' },
  { emoji: '🐻', species: 'Panda', kind: 'Mammal', origin: 'Asia' },
  { emoji: '🐫', species: 'Camel', kind: 'Mammal', origin: 'Africa' },
  { emoji: '🐦', species: 'Toucan', kind: 'Bird', origin: 'Africa' },
  { emoji: '🦢', species: 'Flamingo', kind: 'Bird', origin: 'Africa' },
];


