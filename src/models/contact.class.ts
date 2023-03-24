export class Contact {

    id: number;
    color: string;
    shortName: string;
    firstName: string;
    lastName: string;
    mail: string;
    phone: number;
    select: boolean;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.color = obj ? obj.color : '';
        this.shortName = obj ? obj.shortName : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.mail = obj ? obj.mail : '';
        this.phone = obj ? obj.phone : '';
        this.select = obj ? obj.select : false;
    }

    public toJSON(){
        return{
            id: this.id,
            color: this.color,
            shortName: this.shortName,
            firstName: this.firstName,
            lastName: this.lastName,
            mail: this.mail,
            phone: this.phone,
            select: this.select
        };
    }

}