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

// bonus
const vanillaPrice = document.getElementById("vanillaPrice") as HTMLElement;
const chocoPrice = document.getElementById("chocoPrice") as HTMLElement;
const strawberryPrice = document.getElementById("strawberryPrice") as HTMLElement;
const vanillaQuantity = document.getElementById("vanillaScoop") as HTMLElement;
const chocoQuantity = document.getElementById("chocoScoop") as HTMLElement;
const strawberryQuantity = document.getElementById("strawberryScoop") as HTMLElement;
const vanillaOutput = document.getElementById("vanillaTotal") as HTMLOutputElement;
const chocoOutput = document.getElementById("chocoTotal") as HTMLOutputElement;
const strawberryOutput = document.getElementById("strawberryTotal") as HTMLOutputElement;

const vanillaBtn = document.getElementById("vanillaAdd") as HTMLButtonElement;
const chocoBtn = document.getElementById("chocoAdd") as HTMLButtonElement;
const strawberryBtn = document.getElementById("strawberryAdd") as HTMLButtonElement;
const resetBtn = document.getElementById("reset") as HTMLButtonElement;

let vanillaScoop = 0;
let chocoScoop = 0;
let strawberryScoop = 0;
vanillaBtn.addEventListener("click", () => {
 vanillaScoop  += 1
 const price = Number(vanillaPrice.textContent)
 vanillaQuantity.textContent = String(vanillaScoop)
  vanillaOutput.textContent =String((price * vanillaScoop).toFixed(2))
})

chocoBtn.addEventListener("click", () => {
  chocoScoop += 1
  const price = Number(chocoPrice.textContent)
  chocoQuantity.textContent = String(chocoScoop)
  chocoOutput.textContent = String((price * chocoScoop).toFixed(2))
})

strawberryBtn.addEventListener("click", () => {
  strawberryScoop += 1
  const price = Number(strawberryPrice.textContent)
  strawberryQuantity.textContent = String(strawberryScoop)
  strawberryOutput.textContent = String((price * strawberryScoop).toFixed(2))
})

resetBtn.addEventListener("click", () => {
  vanillaScoop = 0;
  chocoScoop = 0;
  strawberryScoop = 0;
  vanillaQuantity.textContent = String(0)
  vanillaOutput.textContent =String(vanillaScoop.toFixed(2))
  chocoQuantity.textContent = String(0)
  chocoOutput.textContent =String(vanillaScoop.toFixed(2))
  strawberryQuantity.textContent = String(0)
  strawberryOutput.textContent =String(vanillaScoop.toFixed(2))
})


