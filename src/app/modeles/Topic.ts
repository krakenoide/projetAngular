import { User } from "./User";
import { Message } from "./Message";

export class Topic {
    id:number;
    title:string;
    date:number;
    author:User;
    messages!:Message[];

    constructor (id:number,title:string,date:number,user:User) {
        this.id=id;
        this.title=title;
        this.date=date;
        this.author=user;
    }
}