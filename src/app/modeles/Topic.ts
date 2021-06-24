import { User } from "./User";

export class Topic {
    id:number;
    title:string;
    date:Date;
    author_id:number;
    user:User;

    constructor (id:number,title:string,date:Date,author_id:number,user:User) {
        this.id=id;
        this.title=title;
        this.date=date;
        this.author_id=author_id;
        this.user=user;
    }

}