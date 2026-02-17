export type CarType =
  | "Unknown"
  | "Sedan"
  | "SUV"
  | "Coupe"
  | "Convertible"
  | "Hatchback"
  | "Truck";

export class Car {
    public carType: CarType;
    brand: string = "";
    private _constructionYear: number;
    currentSpeed: number
    constructor(brand: string, constructionYear: number, currentSpeed: number, carType: CarType) {
        this.brand = brand;
        this._constructionYear = constructionYear;
        this.currentSpeed = currentSpeed;
        this.carType = carType;

    }
    getConstructionYear(): string {
        return `construction year: ${this._constructionYear}`;
    }
    getSpeedInfo():string {
        if (this.currentSpeed <= 40) {
            return "Driving slowly";
        }
        else if (this.currentSpeed > 40 && this.currentSpeed <= 70) {
            return "Driving normally";
        }
        else if (this.currentSpeed > 70 && this.currentSpeed <= 120) {
            return "Driving fast";
        }
        else if (this.currentSpeed > 120 && this.currentSpeed <= 190) {
            return "Driving really fast";
        }
        else {
            return "WTF";
        }
    }
}

export class Driver {
    firstName: string;
    lastName: string;
    age: number;
    car: Car;
    private _licenseFromYear: number
    constructor(firstName: string, lastName: string, age: number, car: Car, licenseFromYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.car = car;
        this._licenseFromYear = licenseFromYear;
    }
    getLicenseInfo(): string {
        const currentYear = new Date().getFullYear();
        const yearsOfExperience = currentYear - this._licenseFromYear;
        return `${this.firstName} ${this.lastName} has ${yearsOfExperience} years of driving experience.`;
    }
    getCarType(): string {
        return `Car Type: ${this.car.carType}`;
    }
}













