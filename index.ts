// entry point for the code
import { Car } from "./models/Car";
import { RentalService } from "./models/RentalService";

const rService = new RentalService({
    id: "1",
    cars: [],
    customers: [],
    reservations: []
});

rService.addCar(new Car({
    id: "1",
    name: "Car 1",
    year: 2020,
    make: "Toyota",
    model: "Camry",
    licenseNumber: "123456",
    type: "Sedan",
    status: "Available",
    pricePerDay: 100
}))
rService.addCar(new Car({
    id: "2",
    name: "Car 2",
    year: 2022,
    make: "Toyota",
    model: "Camry_20",
    licenseNumber: "1__1123456",
    type: "HatchBack",
    status: "Available",
    pricePerDay: 120
}))


console.log(rService.cars.forEach((car) => console.log("Car:",car)));