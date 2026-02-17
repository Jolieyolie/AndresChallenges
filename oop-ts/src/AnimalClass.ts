export class Animal {
    private _species: string;
    private _age: number;
    private _color: string;
    
    constructor(species: string, age: number, color: string) {
        this._species = species;
        this._age = age;
        this._color = color;
    }
    getInfo(): string {
        return `Species: ${this._species}, Age: ${this._age}, Color: ${this._color}`;
    }
    setInfo(species: string, age: number, color: string): void {
        this._species = species;
        this._age = age;
        this._color = color;
    }
}

export type Gender = "Male" | "Female" | "Other";


export class Person2 {
    private _name: string;
    private _age: number;
    private _gender: Gender;
    
    constructor(name: string, age: number, gender: Gender) {
        this._name = name;
        this._age = age;     
        this._gender = gender;
    }
    getInfo(): string {
        return `Name: ${this._name}, Age: ${this._age}, Gender: ${this._gender}`;
    }
    setInfo(name: string, age: number, gender: Gender): void {
        this._name = name;
        this._age = age;
        this._gender = gender;
    } 
}