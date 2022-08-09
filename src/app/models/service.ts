export class Services {
    _id: string;
    name: string;
    description: string;
    serviceCost: Number;

    constructor(id?: string, name?: string, description?: string, serviceCost?: number){
        this._id = id!;
        this.name = name!;
        this.description = description!;
        this.serviceCost = serviceCost!;
    }
}