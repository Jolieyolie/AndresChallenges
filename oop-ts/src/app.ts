import {SchoolClass} from "./SchoolClass";
import {Person} from "./Person";
import {Car} from "./CarClass";
import {Driver} from "./CarClass";
import {Series, Actors, Episode} from "./TVClass";
import {Animal, Person2} from "./AnimalClass";
import {Customer} from "./CustomerClass";

import "./main";


// oop-ts-task3
console.log("---------------------task3-------------------------")
const class1 = new SchoolClass(1, "Math");

for (let i = 0; i < 5; i++) {
    const person = new Person(
        i + 1, 
        `FirstName${i + 1}`, 
        `LastName${i + 1}`, 
        new Date(1990, i, i + 1));
    class1.addPerson(person);
}

console.log("Initial persons in the class:");
class1.displayPersons();
const person1 = new Person(6, "John", "Doe", new Date(1995, 5, 15));
const person2 = new Person(7, "Jane", "Smith", new Date(1992, 8, 20));
const person3 = new Person(8, "Alice", "Johnson", new Date(1998, 2, 10));
class1.addPerson(person1);
class1.addPerson(person2);
class1.addPerson(person3);

console.log("After adding more persons:");
class1.displayPersons();

// oop-ts-task4
console.log("---------------------task4-------------------------")
const car1 = new Car("Toyota", 2020, 120, "Sedan");
const driver1 = new Driver("John", "Doe", 30, car1, 2010);
const car2 = new Car("Honda", 2018, 100, "SUV");
const driver2 = new Driver("Jane", "Smith", 28, car2, 2012);
console.log(`Driver: ${driver1.firstName} ${driver1.lastName}, Age: ${driver1.age}, Car: ${driver1.car.brand}, Year: ${driver1.car.getConstructionYear()}, Speed: ${driver1.car.currentSpeed } km/h`);
console.log(`Driver: ${driver2.firstName} ${driver2.lastName}, Age: ${driver2.age}, Car: ${driver2.car.brand}, Year: ${driver2.car.getConstructionYear()}, Speed: ${driver2.car.currentSpeed } km/h`);


// oop-ts-task5
console.log("---------------------task5-------------------------")
const actor1 = new Actors("Bryan", "Cranston", new Date(1956, 3, 7), "Male");
const actor2 = new Actors("Aaron", "Paul", new Date(1979, 8, 27), "Male");
const actor3 = new Actors("Anna", "Gunn", new Date(1968, 8, 11), "Female");

const ep1 = new Episode("Pilot", 58, "Walter White starts his journey", []);
const ep2 = new Episode("Cat's in the Bag...", 48, "Walter and Jesse face consequences", []);

const serie1 = new Series("Breaking Bad", "A high school chemistry teacher turned methamphetamine producer.", 2008, 2013, [ep1, ep2]);


function printSeriesInfo(series: Series, actors: Actors[]) {
    console.log(`Title: ${series.title}`);
    console.log(`Description: ${series.description}`);
    console.log(`Start Year: ${series.startYear}`);
    console.log(`End Year: ${series.endYear}`);
    console.log(`Episodes: ${series.episodes}`);
    console.log("Actors:");
    actors.forEach(actor => {
        console.log(`- ${actor.firstName} ${actor.lastName}, Birthday: ${actor.birthday.getFullYear()}-${String(actor.birthday.getMonth() + 1).padStart(2, '0')}-${String(actor.birthday.getDate()).padStart(2, '0')}, Gender: ${actor.gender}`);

    });
    series.episodes.forEach(episode => {
        console.log(`Episode Title: ${episode.title}`);
        console.log(`Length: ${episode.length} minutes`);
        console.log(`Description: ${episode.description}`);
        console.log(`Actors: ${episode.actors.join(", ")}`);
    });
}

printSeriesInfo(serie1, [actor1, actor2, actor3]);


// oop-ts-task6
console.log("---------------------task6-------------------------")
const dog = new Animal("Dog", 5, "Brown");
console.log(dog.getInfo());
dog.setInfo("Dog", 6, "Black");
console.log(dog.getInfo());

const alice = new Person2 ("Alice", 30, "Female");
console.log(alice.getInfo());
alice.setInfo("Alice", 31, "Female");
console.log(alice.getInfo());

// oop-ts-task8
console.log("---------------------task8-------------------------")
console.log(driver1.getLicenseInfo(), driver1.getCarType());
console.log(car1.getConstructionYear(), car1.getSpeedInfo())

// oop-ts-task9
console.log("---------------------task9-------------------------")
const customer1 = new Customer("John Doe", "john.doe@example.com", "123 Main St", "12345", "Anytown");
console.log(customer1.getName());
console.log(customer1.getEmail());
console.log(customer1.getAddress());
console.log(customer1.getPostalCode());
console.log(customer1.getCity());

customer1.setName("Jane Doe");
customer1.setEmail("jane.doe@example.com");    
customer1.setAddress("456 Elm St");
customer1.setPostalCode("54321");
customer1.setCity("Othertown");

console.log(customer1.getName())
console.log(customer1.getEmail());
console.log(customer1.getAddress());
console.log(customer1.getPostalCode());
console.log(customer1.getCity());   



