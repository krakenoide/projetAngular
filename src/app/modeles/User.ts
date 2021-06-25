import { Topic } from "./Topic";
import { Message } from "./Message";

export class User {
	id:number;
	username:string;
	admin:number;
	topics!: Topic[];
	messages!: Message[];

    constructor (id:number,username:string,admin:number) {
        this.id=id;
        this.username=username;
        this.admin=admin;
    }

}