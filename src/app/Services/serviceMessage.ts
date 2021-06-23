import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/modeles/User";
import { ActivatedRoute, Router } from "@angular/router";
import { Message} from "src/app/modeles/Message";


@Injectable()
export class serviceMessage {
    m : Message;
    messages! : Message[];
    apiMessage = "http://localhost:8080/api/message"
    urlLogin = "http://localhost:8080/topic"

    constructor(private httpClient:HttpClient,private router:Router){}
   


    getUser(id : number):void {
        this.user=cuser;
    }

    emitUser():string{
        return this.user;
    }
    getAllmessages() {
        this.httpClient.get<User[]> (this.apiMessage)
                       .subscribe(data =>{this.messages=data},
                        error => {

                        });
    }
    getMessage() {
        this.httpClient.get<User[]> (this.message)
                       .subscribe(data =>{this.users=data},
                        error => {

                        });
    }
    createUser(username:string,password:string,passwordbis:string){
        this.httpClient.post<User> (this.apiUser, {username:username,password:password,passwordbis:passwordbis})
                       .subscribe(data =>{this.connectedUser=data; this.emitConnectedUser();   this.redirectToHomePage();
                        
                    },
                       error => {

                       });
                    
    
                    }



    deleteUser(id:number){
        this.httpClient.delete(this.apiMessage+`/${id}`)
                       .subscribe(data =>{},
                        error => {

                        });
}
}