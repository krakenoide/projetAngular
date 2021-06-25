import { User } from "./User";
import { Message } from "./Message";

export class Topic {
<<<<<<< HEAD
    id:number;
    title:string;
    date:number;
    author:User;

    constructor (id:number,title:string,date:number,user:User) {
        this.id=id;
        this.title=title;
        this.date=date;
        this.author=user;
    }
=======
	id:number;
	title:string;
	date:Date;
	author:User;
    messages !: Message[];
>>>>>>> f4347b8429c4e5e61c8c7a49389becc6446629aa

	constructor (id:number,title:string,date:Date,user:User) {
		this.id=id;
		this.title=title;
		this.date=date;
		this.author=user;
	}
}