import { User } from "./User";
import { Message } from "./Message";

export class Topic {
	id:number;
	title:string;
	date:Date;
	author:User;
    messages !: Message[];

	constructor (id:number,title:string,date:Date,user:User) {
		this.id=id;
		this.title=title;
		this.date=date;
		this.author=user;
	}
}