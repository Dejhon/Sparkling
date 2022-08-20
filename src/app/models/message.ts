export class Messages {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message:string;
    status?:string

    constructor(id?: string, firstName?: string, lastName?: string, subject?: string,
        phoneNumber?: string, email?:string, message?:string, status?:string){
        this._id = id!;
        this.firstName = firstName!;
        this.lastName = lastName!;
        this.email = email!;
        this.phoneNumber = phoneNumber!
        this.subject = subject!;
        this.message = message!;
        this.status = status!;
    }
}