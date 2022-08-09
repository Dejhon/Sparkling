export class Bookings {
    _id: string;
    name: string;
    email: string;
    address: string;
    serviceBooked: string;
    serviceCharge: Number;

    constructor(id?: string, name?: string, email?: string, serviceCharge?: number,
        serviceBooked?: string, address?:string){
        this._id = id!;
        this.name = name!;
        this.email = email!;
        this.address = address!;
        this.serviceBooked = serviceBooked!
        this.serviceCharge = serviceCharge!;
    }
}