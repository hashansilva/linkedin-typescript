export class User{
    public readonly id: string;
    public firstName:string;
    public lastName:string;
    public email:string;
    protected dob:Date;

    public get fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }

    public checkEmail(email:string):boolean{
        return this.email === email;
    }
}