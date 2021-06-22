import { Timestamp } from "rxjs";
<<<<<<< HEAD

class Message {
=======
import { Topic } from "./Topic";

export class Message {
>>>>>>> develop
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