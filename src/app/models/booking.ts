export class Bookings {
    _id: string;
    name: string;
    email: string;
    address: string;
    serviceBooked: string;
    serviceCharge: number;
    cardNumber:number;
    cvv:number;
    status:string

    constructor(id?: string, name?: string, email?: string, serviceCharge?: number,
        serviceBooked?: string, address?:string, cardNumber?:number, cvv?:number,
        status?:string){
        this._id = id!;
        this.name = name!;
        this.email = email!;
        this.address = address!;
        this.serviceBooked = serviceBooked!
        this.serviceCharge = serviceCharge!;
        this.cardNumber = cardNumber!;
        this.cvv = cvv!
        this.status = status!;
    }
}