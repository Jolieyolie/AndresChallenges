export class Customer {
    private _name: string = "";
    private _email: string = "";
    private _address: string = "";
    private _postalCode: string = "";
    private _city: string = "";

    getName():string {
        return `Customer name: ${this._name}`;
    }
    getEmail():string {
        return `Customer email: ${this._email}`;
    }
    getAddress():string {
        return `Customer address: ${this._address}`;
    }
    getPostalCode():string {
        return `Customer postal code: ${this._postalCode}`;
    }
    getCity():string {
        return `Customer city: ${this._city}`;
    }
    constructor(name: string, email: string, address: string, postalCode: string, city: string) {
        this._name = name;
        this._email = email;
        this._address = address;
        this._postalCode = postalCode;
        this._city = city;
    }
    setName(name:string): void {
        if (name.length > 60 || name.length < 0) {
            throw new Error("Name must be between 0 and 60 characters.");
        }
        this._name = name;
    }
    setEmail(email:string): void {
        if (email.includes("@") && email.includes(".")) {
            this._email = email;
        } else {
            throw new Error("Invalid email format.");
        }
    }
    setAddress(address:string): void {
        this._address = address;
    }
    setPostalCode(postalCode:string): void {
    const regex = /^\d{5}$/;

    if (!regex.test(postalCode)) {
        throw new Error(
        "Postal code must be exactly 5 digits between 00000 and 99999."
      );    }
        this._postalCode = postalCode;
    }
    setCity(city:string): void {
        this._city = city;
    }
}