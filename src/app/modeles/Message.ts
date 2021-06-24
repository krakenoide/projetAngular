import { Timestamp } from "rxjs";
import { Topic } from "./Topic";
import { serviceMessage } from "../Services/serviceMessage";
import { User } from "./User";

export class Message {
    id:number;
    author_id:number;
    content:string;
    date:Date;
    topic:Topic;
    user : User;

    constructor (id:number,author_id:number,content:string,date:Date,topic:Topic,user:User) {
        this.id=id;
        this.author_id=author_id;
        this.content=content;
        this.date=date;
        this.topic=topic;
        this.user=user;
    }
}