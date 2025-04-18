export class Car {
    id:string;
    name:string;
    year: number;
    make: string;
    model: string;
    licenseNumber: string;
    type: string;
    status: string;
    pricePerDay: number;
    
    constructor({
        id,
        name,
        year,
        make,
        model,
        licenseNumber,
        type,
        status,
        pricePerDay,
    }) {
        this.id = id;  
        this.name = name;
        this.year = year;
        this.make = make;
        this.model = model;
        this.licenseNumber = licenseNumber;
        this.type = type;
        this.status = status;
        this.pricePerDay = pricePerDay;
    }

    updateStatus(status: string) {
        this.status = status;
    }

    updatePricePerDay(pricePerDay: number) {
        this.pricePerDay = pricePerDay;
    }
}