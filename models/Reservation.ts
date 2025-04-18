export class Reservation{
    id: string;
    customerId: string;
    carId: string;
    startDate: Date;
    endDate: Date;
    isAvailable: boolean;
    
    constructor({
        id,
        customerId,
        carId,
        startDate,
        endDate,
        isAvailable,
    }) {
        this.id = id;  
        this.customerId = customerId;
        this.carId = carId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isAvailable = isAvailable;
    }
    
    updateStatus(status: boolean) {
        this.isAvailable = status;
    }
    
    updateStartDate(startDate: Date) {
        this.startDate = startDate;
    }
    
    updateEndDate(endDate: Date) {
        this.endDate = endDate;
    }
}