import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Topic } from "src/app/modeles/Topic";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../modeles/User";
import { Message } from "../modeles/Message";
import { Subscription } from 'rxjs';


@Injectable()
export class serviceTopic {
    connectedUser!:User;
    activeTopic!: Topic;
    topics!: Topic[];
    apiTopic = "http://localhost:8080/api/topic"
    userSubject = new Subject<Topic>();
    userSubscription!: Subscription;

    constructor(private httpClient:HttpClient,private router:Router, private snackBar:MatSnackBar){}

    emitActiveTopic():void{
        this.userSubject.next(this.activeTopic);
    }

    deleteTopic(id:number){
        this.httpClient.delete(this.apiTopic+`/${id}`)
                       .subscribe(data =>{this.snackBar.open("Sujet supprimé!");
                    },
                        error => {
                            this.snackBar.open("Echec de la supression!");
                        });
    }

    getAllTopic() {
        this.httpClient.get<Topic[]> (this.apiTopic)
                       .subscribe(data =>{this.topics=data;
                    },
                        error => {
                            this.snackBar.open("Echec de la récupération des utilisateurs!");
                        });
    }

    createTopic(title:string,date:Date,content:Message){
        this.httpClient.post<Topic> (this.apiTopic, {title:title,user:this.connectedUser,date:date,content:content})
                       .subscribe(data =>{this.activeTopic=data;  
                        this.snackBar.open("Sujet créé!"); 
                        this.redirectToHomePage(); 
                    },
                       error => {
                            this.snackBar.open("Echec de la création du sujet!");
                       });
    }

    modifTopic(ntitle:string){
        this.httpClient.patch<Topic> (this.apiTopic+`/${this.activeTopic.id}`, {title:ntitle})
                       .subscribe(data =>{this.activeTopic=data; 
                        this.snackBar.open("Titre du sujet modifié!");
                        this.redirectToHomePage();
                    },
                       error => {
                            this.snackBar.open("Echec de la modification!");
                       });
    }

    redirectToHomePage() : void {
       this.router.navigate(['']);
    }
}