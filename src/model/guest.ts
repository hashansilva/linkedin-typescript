import { User } from "./user";

export class Guest implements User{
    public firstName:string;
    public lastName:string;
    public email:string;

    constructor(firstName:string, lastName:string, email:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email  = email;
    }

    public get fullName():string{
        return `${this.lastName} ${this.firstName}`;
    }

    public checkEmail(email:string):boolean{
        return this.email === email;
    }
}