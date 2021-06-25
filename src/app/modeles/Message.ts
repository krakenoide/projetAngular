import { Topic } from "./Topic";
import { User } from "./User";

export class Message {
	id:number;
	content:string;
	date:Date;
	topic:Topic;
    author:User;

	constructor (id:number,user:User,content:string,date:Date,topic:Topic) {
		this.id=id;
		this.content=content;
		this.date=date;
		this.topic=topic;
        this.author=user;
	}

}