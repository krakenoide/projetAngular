import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class serviceConnected {
    user: string="";
    userSubject = new Subject<string>();

    getUser(cuser:string):void {
        this.user=cuser;
    }

    emitUser():string{
        return this.user;
    }
}