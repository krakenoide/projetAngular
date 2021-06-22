<<<<<<< HEAD
class User {
    id:number;
    username:string;
    password:string;
    admin:boolean;

    constructor (id:number,username:string,password:string,admin:boolean) {
        this.id=id;
        this.username=username;
        this.password=password;
        this.admin=admin;
=======
import { Topic } from "./Topic";
import { Message } from "./Message";

export class User {
    id:number;
    username:string;
    admin:number;
    topics:Topic[]= [];
    messages: Message[]= [];

    constructor (id:number,username:string,password:string,admin:number) {
        this.id=id;
        this.username=username;
        this.admin=admin;

>>>>>>> develop
    }

}