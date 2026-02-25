export class Enclosure {
    private _id: number;
    private _label: string;
    private _capacity: number;

    constructor(id: number, label: string, capacity: number) {
        this._id = id;
        this._label = label;
        this._capacity = capacity;
    }

    getId(): number{
        return this._id;
    }

    getLabel(): string {
        return this._label
    }

    getCapacity(): number {
        return this._capacity
    }
}