export class Car {
    id:string;
    name:string;
    year: number;
    make: string;
    model: string;
    licenseNumber: string;
    type: string;
    isAvailable: boolean;
    pricePerDay: number;
    
    constructor({
        id,
        name,
        year,
        make,
        model,
        licenseNumber,
        type,
        isAvailable,
        pricePerDay,
    }) {
        this.id = id;  
        this.name = name;
        this.year = year;
        this.make = make;
        this.model = model;
        this.licenseNumber = licenseNumber;
        this.type = type;
        this.isAvailable = isAvailable;
        this.pricePerDay = pricePerDay;
    }

    updateStatus(status: boolean) {
        this.isAvailable = status;
    }

    updatePricePerDay(pricePerDay: number) {
        this.pricePerDay = pricePerDay;
    }
}