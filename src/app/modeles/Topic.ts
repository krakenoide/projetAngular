<<<<<<< HEAD
import { User } from "./User";

export class Topic {
	id:number;
	title:string;
	date:Date;
	author:User;

	constructor (id:number,title:string,date:Date,user:User) {
		this.id=id;
		this.title=title;
		this.date=date;
		this.author=user;
	}
=======
import { Message } from "./Message";
import { User } from "./User";

export class Topic {
    id:number;
    title:string;
    date:Date;
    author_id:number;
    user:User;
    messages !: Message[];

    constructor (id:number,title:string,date:Date,author_id:number,user:User) {
        this.id=id;
        this.title=title;
        this.date=date;
        this.author_id=author_id;
        this.user=user;
        
    }
>>>>>>> 53f8c02cbb7d7090cc2e62433afd7ba1d1cbbb9b

}