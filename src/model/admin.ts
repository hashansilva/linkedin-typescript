import { User } from "./user"

export class Admin extends User{
    constructor(firstName:string, lastName:string, email:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}