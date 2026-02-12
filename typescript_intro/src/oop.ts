console.log('_______________in class assignment_______________');

type User = {
    name: string;
    active: boolean;
    bio?:string;
}

function formatUser(u:User): string {
    return `${u.name}(${u.active})`
}
const user1: User = { name: 'Ada', active: true };
const user2: User = { name: 'Helen', active: false };

console.log(formatUser(user1)); 
console.log(formatUser(user2)); 


function headline(u:User): string {
    return `${u.name} (${u.bio ? 'bio' : 'no bio'})`
}
const user4: User = {name: 'Ada', active: true, bio: 'bio'} 
console.log(user4)

console.log(headline)
type Product = {
    id: string;
    name: string;
    price: number;
};

type CartItem = {
    product: Product;
    quantity: number;
}

function total(items: readonly CartItem[]): number {
    let sum = 0;
    for (const item of items) {
        sum += item.product.price + item.quantity
    }
    return sum;
}
const product1: Product = {
    id: 'us12',
    name: 'Apple',
    price: 3,
};

const product2: Product = {
    id: 'us13',
    name: 'Banana',
    price: 5,
};

const myCart1: CartItem = {
    product: product1,
    quantity: 5,
}

const myCart2: CartItem = {
    product: product2,
    quantity: 16,
}
console.log(total([myCart1,myCart2])); 


console.log(Math.PI.toFixed(2));
console.log(Math.round(4.5))
console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))
console.log(Math.trunc(4.5))
console.log(Math.min(3,7,2))
console.log(Math.max(3,7,2))
console.log(Math.abs(-10))
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*30))

// oop ortientation
// `{user: {profile: {name: ’Ada’}}}` nested object
// 
const a = {
    name: 'Ada',
    age: 23,
} 

const b = a; // b is copying reference to a, so if a is changed, b is also changed.

b.name = 'Bob';
console.log(a) // if b is changed, a is also changed.
const c = {...a}; // this is just copy, if c is changed, a is not changed.
c.name= 'Alex'
console.log(c)
console.log(a) 
const n1 = { profile: {city: 'London'}} // only copy the profile outerbox is copied
const n2 = {... n1} 
n2.profile.city = 'Lisbon' // changes in n1 as well, because profile.city is copied
console.log(n1)
console.log(n2)

//to copy completely there is a method 

// 0204
console.log("____________object oriented programming__________")
type Address = {
    city: string;
    country: string
}

type Profile = {
    displayName: string;
    address: Address;
}
type User2 = {
    id:number; 
    email:string;
    profile: Profile;
}

const userA: User2 = {
    id: 1,
    email: "ada@gmail.com",
    profile: {
        displayName: "Ada",
        address: {
            city: "London",
            country: "UK"
        }
    }
}

const userB: User2 = {
    ...userA,
    profile: {
        ...userA.profile,
        address: {
            ...userA.profile.address,
            city: "Lisbon",
            country: "Portugal"
        }
    }
}
const userC: User2 = {
    ...userA
}
console.log(userC)

console.log(userA.profile.displayName,userA.profile.address.city)
console.log(userB.profile.displayName,userB.profile.address.city)


console.log("____________Destructuring__________")

const {
    id,
    email,
    profile: { displayName: name, address}
} = userA;

console.log({id, email, name, address});
const {id: _, ...userWithoutId} = userA; // assuming the variable is the new object
console.log(userWithoutId)


console.log("____________Data Transfer Object(dto)__________")
console.log("utility types for full-stack DTOs")
//A Data Transfer Object (DTO) is a simple object used to transfer data between layers of an application
//(e.g., API ↔ Service ↔ UI) without containing business logic.
// DTO: is the shape of the data we send or receive(JSON) from backend to database or frontend

// Omit<T, K> : take type T and remove keys K from it, ie: "Omit<User, id> = everything in User, except id"
// Pick<T, K> : take type T and only keep keys K from it, ie: Pick<User, 'email' | 'active'> = {email:string; active: boolean}
// Partial<T>: make all properties in T optional, ie: Partial<email:string; active: boolean}> it allows {} or {email: "ada@example.com"}
// Record<k, v> an object map where keys are "K" and values are "V", ie: Record<string, number> = {[key: string, number}]}
// Required<T>
// POST  → CreateUserDTO  → Entity
// GET   ← UserResponseDTO ← Entity
// PUT   → UpdateUserDTO  → Entity

type RealUser = {
    id: number;
    email: string;
    active: boolean;
    profile: {
        displayName: string;
        bio?:string;
    }
}
const newUser: RealUser = {
    id: 1,
    active:true,
    email: 'ff',
    profile: {
        displayName: 'ff',
    }}
    console.log(newUser)
// type updateUserInput = Partial<Pick<RealUser, 'email' | 'active' >> & {profile?: Partial<RealUser['profile']>}; //'|' means or.


// 
type UserD = {
    name: string;
    active: boolean;
    profile: {
        displayName: string;
        address: {
            city: string;
            country: string;
        }
    }
}
type UpdateCity = (user: UserD, city: string) => UserD;

const updateCity: UpdateCity = (user, city) => {
  return {
    ...user,
    profile: {
      ...user.profile,
      address: {
        ...user.profile.address,
        city: city
      }
    }
  };
};
console.log(updateCity)

// 02.11 oop concepts
console.log("____________OOP concepts__________")
// 1. Encapsulation: bundling data and methods that operate on that data within a single unit (class).
// 2. Inheritance: a mechanism where a new class (child) can inherit properties and behaviors (methods) 
// from an existing class (parent).
// 3. Polymorphism: the ability of different classes to be treated as instances of the same class through a common interface, often achieved through method overriding.
// 4. Abstraction: hiding complex implementation details and showing only the necessary features of an object, often achieved through abstract classes or interfaces.
// 5. Composition: a design principle where a class is composed
// of one or more objects from other classes, allowing for flexible code reuse and separation of concerns.
// 6. Association: a relationship between two classes where one class uses or interacts with another class, without implying ownership (e.g., a teacher and a student).

// Inheritance: a mechanism where a new class (child) can inherit properties and behaviors (methods) from an existing class (parent).    
// old way of creating objects
// class Animal {
//     public _name: string;
//     constructor(name: string) {
//         this._name = name;
//     }
// }

// modern way of creating objects
class Animal {
    public _name: string;
    constructor(name: string) {
        this._name = name;
    }
    move(): void {
        console.log(`${this._name} is moving`);
    }
}
class Dog extends Animal {
    bark(): void {
        console.log(`${this._name} is barking`);
    }
    override move(): void {
        super.move();
        console.log(`${this._name} is running`);
    }
}
const buddy = new Dog('Buddy');
buddy.move(); // Output: Buddy is moving \n Buddy is running
buddy.bark(); // Output: Buddy is barking

// Polymorphism: the ability of different classes to be treated as instances of the same class through a common interface, often achieved through method overriding.
//the ability for an object to "act as" another type in certain situations.
class Animal2 {
    public _name: string;
    constructor(name: string) {
        this._name = name;
    }
    speak(): void {
        console.log(`${this._name} is speaking`);
    }

}
class Cat extends Animal2 {
    override speak(): void {
        console.log(`${this._name} is meowing`);
    }
    }
class Cow extends Animal2 {
    override speak(): void {
        console.log(`${this._name} is mooing`);
    }
}

function makeAnimalSpeak(animal: Animal2): void {
    animal.speak();
}

const animals: Animal2[] = [new Cat('Whiskers'), new Cow('Bessie')];
// animals.forEach(animal => animal.speak());
animals.forEach(makeAnimalSpeak);
animals[0]._name = 'Mila'
animals.forEach(makeAnimalSpeak);
//Encapsulation: bundling data and methods that operate on that data within a single unit (class).
//The ability to hide implementation details and restrict access to certain components of an object, 
// ensuring that the internal state of the object can only be modified through well-defined interfaces.
class Rabbit {
    public _name: string;
    private _energy: number = 50; 
    constructor(name:string) { // constructor is a special method that is called when an instance of the class is created. It is used to initialize the properties of the class.
        this._name = name;
    }// private means it can only be accessed within the class
    getEnergy(): number { // getter is a method that is used to access the properties of the class. It is defined using the get keyword and can be accessed like a property.
        return this._energy;
    }

    eat(amount: number): void {
        if (amount <= 0) throw new Error('Food amount must be positive');
        this._energy += Math.min(100, this._energy + amount); // energy cannot exceed 100
        console.log(`${this._name} is eating and energy is now ${this._energy}`);
    }
    hop(times: number): void {
        if (times <= 0) throw new Error('Hop times must be positive');
        const energyCost:number = times * 10;
        if (this._energy < energyCost)  throw new Error(`${this._name} does not have enough energy to hop ${times} times`);
        this._energy -= energyCost;
        console.log(`${this._name} hopped ${times} times and energy is now ${this._energy}`);   
}
}
const snowBall = new Rabbit('Snowball');
snowBall.getEnergy()
snowBall.eat(30); // Snowball is eating and energy is now 80
snowBall.hop(3); // Snowball hopped 3 times and energy is now 50
snowBall.getEnergy()// snowBall._energy = 200; // Error: Property '_energy' is private and only accessible within class 'Rabbit'.

// Abstraction: hiding complex implementation details and showing only the necessary features of an object, often achieved through abstract classes or interfaces.
// The ability to hide complex implementation details and show only the necessary features of an object, 
// allowing users to interact with the object through a simplified interface.
abstract class Animal3 {
    public _name: string;
    constructor(name: string) {
        this._name = name;
    }
    protected abstract getFood():string; 
    eat(): void {
        console.log(`${this._name} is eating ${this.getFood()}`);
    }
    sleep(hours:number): void {
        console.log(`${this._name} sleeps for ${hours} hours`)
    } // abstract method is a method that is declared but not implemented in the abstract class. It must be implemented in the derived class.
}
class Parrot extends Animal3 {
    protected override getFood(): string {
        return 'seeds';
    }
}
class Snake extends Animal3 {
    protected override getFood(): string {
        return 'mice';
    }
}
// const myAninam3 = new Animal3('Generic Animal'); // Error: Cannot create an instance of an abstract class.
const polly = new Parrot('Polly');
const slither = new Snake('Slither');
polly.eat(); // Polly is eating seeds
slither.eat(); // Slither is eating mice
const pets: Animal3[] = [polly, slither];
pets.forEach(pet => pet.eat());
pets[0].sleep(8) // Polly sleeps for 8 hours \n Slither sleeps for 8 hours
