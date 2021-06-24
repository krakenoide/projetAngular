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
    topicServiceList!: Topic[];
    apiTopic = "http://localhost:8080/api/topic"
    topicSubject = new Subject<Topic>();
    topicAllSubject = new Subject<Topic[]>();
    topicSubscription!: Subscription;

    constructor(private httpClient:HttpClient,private router:Router, private snackBar:MatSnackBar,private servicesUser:serviceUser){}

    emitActiveTopic():void{
        this.topicSubject.next(this.activeTopic);
    }

    emitAllTopics():void{
        this.getAllTopic();
        this.topicAllSubject.next(this.topicServiceList);
    }

    deleteTopic(id:number){
        this.httpClient.delete(this.apiTopic+`/${id}`)
                       .subscribe(data =>{this.snackBar.open("Sujet supprimé!","Ok",{duration: 4000});
                    },
                        error => {
                            this.snackBar.open("Echec de la supression!","Ok",{duration: 4000});
                        });
    }

    getAllTopic() {
        this.httpClient.get<Topic[]> (this.apiTopic)
                       .subscribe(data =>{
                           this.topicServiceList=data;
                           console.log(this.topicServiceList);
                    },
                        error => {
                            this.snackBar.open("Echec de la récupération des sujets!","Ok",{duration: 4000});
                        });
    }

    getTopic(id:number):Topic{
        this.httpClient.get<Topic> (this.apiTopic+`/${id}`)
                       .subscribe(data =>{return data;
                    },
                        error => {
                            this.snackBar.open("Echec de la récupération du sujet!","Ok",{duration: 4000});
                        });
        return this.activeTopic;
    }

    createTopic(title:string,date:Date,content:Message){
        this.httpClient.post<Topic> (this.apiTopic, {title:title,user:this.connectedUser,date:date,content:content})
                       .subscribe(data =>{this.activeTopic=data;  
                        this.snackBar.open("Sujet créé!");  
                    },
                       error => {
                            this.snackBar.open("Echec de la création du sujet!","Ok",{duration: 4000});
                       });
    }

    modifTopic(ntitle:string){
        this.httpClient.patch<Topic> (this.apiTopic+`/${this.activeTopic.id}`, {title:ntitle})
                       .subscribe(data =>{this.activeTopic=data; 
                        this.snackBar.open("Titre du sujet modifié!","Ok",{duration: 4000});
                    },
                       error => {
                            this.snackBar.open("Echec de la modification!","Ok",{duration: 4000});
                       });
    }

    redirectToHomePage() : void {
       this.router.navigate(['']);
    }

    redirectToTopicPage() : void {
        this.router.navigate(['']);
     }
}