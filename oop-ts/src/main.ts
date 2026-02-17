import './style.css'
import { SchoolClass } from './SchoolClass';

import { IceCreamFlavor } from './IceCreamClass';

// oop-ts-task1
console.log("---------------------task1-------------------------")

const vanilla = new IceCreamFlavor();
vanilla.name = "vanilla";
vanilla.price = 1.5;
vanilla.isPopular = true;
vanilla.description = "A classic flavor made from vanilla beans.";
const chocolate = new IceCreamFlavor();
chocolate.name = "chocolate";
chocolate.price = 2.0;
chocolate.isPopular = true;
const strawberry = new IceCreamFlavor();
strawberry.name = "strawberry";
strawberry.price = 1.8;
strawberry.isPopular = false;
const mint = new IceCreamFlavor();
mint.name = "mint";
mint.price = 1.7;
mint.isPopular = false;
const flavors: IceCreamFlavor[] = [
  vanilla, chocolate, strawberry, mint];
  flavors
  .filter(flavor => flavor.isPopular)
  .forEach(flavor => {
    console.log(`${flavor.name} is a popular flavor!`);
  })


// oop-ts-task2
console.log("---------------------task2-------------------------")
const mathClass = new SchoolClass(1, "Math");
const historyClass = new SchoolClass(2, "History");
const scienceClass = new SchoolClass(3, "Science");
mathClass.name = "Advanced Mathematics";
historyClass.name = "World History";
scienceClass.endDate = new Date("2026-02-15");
const classes: SchoolClass[] = [mathClass, historyClass, scienceClass];
classes.forEach(schoolClass => {
  console.log(`Class ID: ${schoolClass.id}, Name: ${schoolClass.name}, End Date: ${schoolClass.endDate}`);
});


// oop-ts-task7
console.log("---------------------task7-------------------------")
flavors.forEach(flavor => {
  console.log("Flavor Info:", flavor.printInfo());
  console.log("Description Length:", flavor.getLengthOfDescription());
  console.log("Total Price for 3 scoops:", flavor.getTotalprice(3));
})
















