
export class User {
    id:number;
    username:string;
    password:string;
    admin:number;

    constructor (id:number,username:string,password:string,admin:number) {
        this.id=id;
        this.username=username;
        this.password=password;
        this.admin=admin;
    }

}