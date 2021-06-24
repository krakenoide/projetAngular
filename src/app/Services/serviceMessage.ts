import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/modeles/User";
import { ActivatedRoute, Router } from "@angular/router";
import { Message} from "src/app/modeles/Message";
import { Topic} from "src/app/modeles/Topic";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from 'rxjs';
import { serviceUser } from '../Services/serviceUser';


@Injectable()
export class serviceMessage {
    activeMessage!: Message;
    messages! : Message[];
    apiMessage = "http://localhost:8080/api/message"
    connectedUser!: User;

    constructor(private httpClient:HttpClient,private router:Router,private snackBar:MatSnackBar){}
   



    
    getAllmessages() {
        this.httpClient.get<Message[]> (this.apiMessage)
                       .subscribe(data =>{this.messages=data},
                        error => {
                            this.snackBar.open("Echec de la recupération de tous les messages!",);


                        });
    }
    getMessage(id:number) {
        this.httpClient.get<Message> (this.apiMessage+`/${id}`)
                       .subscribe(data =>{this.activeMessage=data},
                        error => {
                            this.snackBar.open("Echec de la recupération d'un message!");


                        });
    }
    createMessage(Content:string){
        this.httpClient.post<Message> (this.apiMessage, {content: Content, user: this.connectedUser, date: Date, "topic": Topic})
                       .subscribe(data =>{this.activeMessage=data;  
                        
                    },
                       error => {
                        this.snackBar.open("Echec de la création!");


                       });
                    
    
                    }

      modifMessage(ncontent:string){
         this.httpClient.patch<Message> (this.apiMessage+`/${this.activeMessage.id}`, {content:ncontent})
             .subscribe(data =>{this.activeMessage=data; 
            
                                    },
         error => {
            this.snackBar.open("Echec de la modification!");

                                          
                 });
         }



    deleteUser(id:number){
        this.httpClient.delete(this.apiMessage+`/${id}`)
                       .subscribe(data =>{},
                        error => {
                            this.snackBar.open("Echec de la supression!");

                        });
}
}