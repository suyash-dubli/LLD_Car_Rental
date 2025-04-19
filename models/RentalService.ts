import { Car } from "./Car";
import {Customer} from "./Customer";
import { Reservation } from "./Reservation";

export class RentalService{
    id:string;
    cars:Car[]=[];
    customers:Customer[]=[];
    reservations:Reservation[]=[];
    
    //Singleton pattern - Creational Design pattern 
    static instance:RentalService;
    constructor(){}
    
    static getInstance(){
        if(!RentalService.instance){
            RentalService.instance = new RentalService();
        }
        return RentalService.instance;
    }

    addCar(newCar:Car){
        this.cars.push(newCar);
    }
    deleteCar(carId:string){
        this.cars = this.cars.filter((car) => car.id !== carId);
    }
    addCustomer(newCustomer:Customer){
        this.customers.push(newCustomer);
        console.log("New customer added");
    }
    deleteCustomer(customerId:string){
        this.customers = this.customers.filter((customer) => customer.id !== customerId);
    }
    addReservation(newReservation:Reservation){
        this.reservations.push(newReservation);
        console.log("New reservation added");
    }
    deleteReservation(reservationId:string){
        this.reservations = this.reservations.filter((reservation) => reservation.id !== reservationId);
    }
}