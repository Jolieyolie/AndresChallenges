export class IceCreamFlavor {
  name:string = "";
  price:number = 0;
  isPopular:boolean = false;
  description?:string;
  constructor() {
  }
  getTotalprice(numberOfScoops: number): number {
    return this.price * numberOfScoops;
  }
  printInfo(): void {
    console.log(`Flavor ${this.name} is popular and costs ${this.price} Euro`)
  }
  getLengthOfDescription(): number {
    return this.description ? this.description.length : 0;
  }
}