import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Topic } from "src/app/modeles/Topic";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../modeles/User";
import { Message } from "../modeles/Message";
import { Subscription } from 'rxjs';
import { serviceUser } from '../Services/serviceUser';


@Injectable()
export class serviceTopic {
    connectedUser!:User;
    activeTopic!: Topic;
    topics!: Topic[];
    apiTopic = "http://localhost:8080/api/topic"
    userSubject = new Subject<Topic>();
    userSubscription!: Subscription;

    constructor(private httpClient:HttpClient,private router:Router, private snackBar:MatSnackBar,private services:serviceUser){}

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

    getTopic(id:number):Topic{
        this.httpClient.get<Topic> (this.apiTopic+`/${id}`)
                       .subscribe(data =>{return data;
                    },
                        error => {
                            this.snackBar.open("Echec de la récupération d'un utilisateur'!");
                        });
        return this.activeTopic;
    }

    createTopic(title:string,date:Date,content:Message){
        this.httpClient.post<Topic> (this.apiTopic, {title:title,user:this.connectedUser,date:date,content:content})
                       .subscribe(data =>{this.activeTopic=data;  
                        this.snackBar.open("Sujet créé!");  
                    },
                       error => {
                            this.snackBar.open("Echec de la création du sujet!");
                       });
    }

    modifTopic(ntitle:string){
        this.httpClient.patch<Topic> (this.apiTopic+`/${this.activeTopic.id}`, {title:ntitle})
                       .subscribe(data =>{this.activeTopic=data; 
                        this.snackBar.open("Titre du sujet modifié!");
                    },
                       error => {
                            this.snackBar.open("Echec de la modification!");
                       });
    }

    redirectToHomePage() : void {
       this.router.navigate(['']);
    }

    redirectToTopicPage() : void {
        this.router.navigate(['']);
     }
}