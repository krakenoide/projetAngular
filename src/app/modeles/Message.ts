import { Timestamp } from "rxjs";
import { Topic } from "./Topic";
import { User } from "./User";

export class Message {
    id:number;
    user:User;
    content:string;
    date:Date;
    topic:Topic;

    constructor (id:number,user:User,content:string,date:Date,topic:Topic) {
        this.id=id;
        this.user=user;
        this.content=content;
        this.date=date;
        this.topic=topic;
    }

}