import { Timestamp } from "rxjs";
import { Topic } from "./Topic";

export class Message {
    id:number;
    author_id:number;
    content:string;
    date:Date;
    topic:Topic;

    constructor (id:number,author_id:number,content:string,date:Date,topic:Topic) {
        this.id=id;
        this.author_id=author_id;
        this.content=content;
        this.date=date;
        this.topic=topic;
    }

}