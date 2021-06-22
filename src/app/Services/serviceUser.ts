import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class serviceUser {
    user: User= new User(0,"","",false);
    userSubject = new Subject<string>();

    setConnectedUser(cuser:User):void {
        this.user=cuser;
    }

    getConnectedUser():User{
        return this.user;
    }
}