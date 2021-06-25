import { Topic } from "./Topic";
import { Message } from "./Message";

export class User {
	id:number;
	username:string;
	admin:number;
	topics!: Topic[];
	messages!: Message[];

<<<<<<< HEAD
    constructor (id:number,username:string,admin:number) {
        this.id=id;
        this.username=username;
        this.admin=admin;
    }
=======
	constructor (id:number,username:string,password:string,admin:number) {
		this.id=id;
		this.username=username;
		this.admin=admin;
	}
>>>>>>> f4347b8429c4e5e61c8c7a49389becc6446629aa

}