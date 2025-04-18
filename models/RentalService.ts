import { Car } from "./Car";
import {Customer} from "./Customer";
import { Reservation } from "./Reservation";

export class RentalService{
    id:string;
    cars:Car[];
    customers:Customer[];
    reservations:Reservation[];
    constructor({
        id,
        cars,
        customers,
        reservations
    }) {
        this.id = id;  
        this.cars = cars;
        this.customers = customers;
        this.reservations = reservations;
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