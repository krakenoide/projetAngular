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

}