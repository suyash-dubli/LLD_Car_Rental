import { Payment } from "../interfaces/Payment";

export class UPI implements Payment{
    doPayment(){
       console.log("Payment done using Upi");
    }
    getPaymentDetails(){
       console.log("Payment details for UPI transaction.");
    }
}