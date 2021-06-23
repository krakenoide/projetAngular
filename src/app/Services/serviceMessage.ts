import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Injectable()
export class serviceMessage {
    user: string="";
    userSubject = new Subject<string>();

    getUser(cuser:string):void {
        this.user=cuser;
    }

    emitUser():string{
        return this.user;
    }
}