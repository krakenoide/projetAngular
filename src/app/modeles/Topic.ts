export class Topic {
    id:number;
    title:string;
    date:Date;
    author_id:number;

    constructor (id:number,title:string,date:Date,author_id:number) {
        this.id=id;
        this.title=title;
        this.date=date;
        this.author_id=author_id;
    }

}