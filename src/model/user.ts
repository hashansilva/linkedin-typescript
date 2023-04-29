export class User{
    public firstName:string;
    public lastName:string;
    public email:string;

    public get fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }

    public checkEmail(email:string):boolean{
        return this.email === email;
    }
}