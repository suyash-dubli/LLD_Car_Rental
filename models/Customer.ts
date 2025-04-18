export class Customer{
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    driverLicenseNumber?: string;
    
    constructor({
        id,
        name,
        email,
        phoneNumber,
        address,
        driverLicenseNumber,
    }) {
        this.id = id;  
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.driverLicenseNumber = driverLicenseNumber;
    }
    
    updateEmailId(newEmail:string){
        this.email = newEmail;
    }

    updateNumber(newPhoneNumber: string) {
        this.phoneNumber = newPhoneNumber;
    }

}