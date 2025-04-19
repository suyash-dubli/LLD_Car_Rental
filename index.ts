// entry point for the code
import { Car } from "./models/Car";
import { Customer } from "./models/Customer";
import { RentalService } from "./models/RentalService";
import { Reservation } from "./models/Reservation";
const rService = RentalService.getInstance();


const car1 = new Car({id:1,name:"Car 1",year:2020,make:"Toyota",model:"Camry",licenseNumber:"123456",type:"Sedan",isAvailable:true,pricePerDay:100})
const cus1 = new Customer({id:1,name:"Customer 1",email:"customer1@gmail.com",phoneNumber:"1234567890",address:"123 Main St",driverLicenseNumber:"1234567890"})

rService.addCar(car1)
rService.addCustomer(cus1)

const reservation1 = new Reservation({id:1,carId:car1.id,customerId:cus1.id,startDate:new Date(),endDate:new Date(),isAvailable:car1.isAvailable})
car1.updateStatus(false);
rService.addReservation(reservation1)

console.log(rService.cars.forEach((car) => console.log("Car:",car)));
console.log(rService.reservations.forEach((reservation) => console.log("Reservation:",reservation)));