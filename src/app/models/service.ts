export class Services {
    _id: string;
    name: string;
    description: string;
    serviceCost: Number;
    firstImage: string;
    secondImage: string;
    thirdImage: string;

    constructor(id?: string, name?: string, description?: string, serviceCost?: number, firstImage?:string,
        secondImage?:string,thirdImage?:string){
        this._id = id!;
        this.name = name!;
        this.description = description!;
        this.serviceCost = serviceCost!;
        this.firstImage = firstImage!;
        this.secondImage = secondImage!;
        this.thirdImage = thirdImage!
    }
}