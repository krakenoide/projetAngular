import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Topic } from "src/app/modeles/Topic";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../modeles/User";
import { Message } from "../modeles/Message";
import { Subscription } from 'rxjs';
import { serviceUser } from '../Services/serviceUser';


@Injectable()
export class serviceTopic {
<<<<<<< HEAD
    connectedUser!:User;
    userSubscription!:Subscription;
    activeTopic!: Topic;
    topicServiceList!: Topic[];
    apiTopic = "http://localhost:8080/api/topic"
    topicSubject = new Subject<Topic>();
    topicAllSubject = new Subject<Topic[]>();

    constructor(private httpClient:HttpClient,private router:Router, private snackBar:MatSnackBar,private servicesUser:serviceUser){
        this.userSubscription = this.servicesUser.userSubject.subscribe((connectedUser:User) => {this.connectedUser=connectedUser;
        })
        this.servicesUser.emitConnectedUser();
        this.getAllTopic();
    }
=======
	connectedUser!:User;
	activeTopic!: Topic;
	topicServiceList!: Topic[];
	apiTopic = "http://localhost:8080/api/topic"
	topicSubject = new Subject<Topic>();
	topicAllSubject = new Subject<Topic[]>();
	topicSubscription!: Subscription;

	constructor(private httpClient:HttpClient,private router:Router, private snackBar:MatSnackBar,private servicesUser:serviceUser){
		this.getAllTopic();
		
	}
>>>>>>> f4347b8429c4e5e61c8c7a49389becc6446629aa

	emitActiveTopic():void{
		this.topicSubject.next(this.activeTopic);
	}

	emitAllTopics():void{
		this.topicAllSubject.next(this.topicServiceList);
	}

	deleteTopic(id:number){
		this.httpClient.delete(this.apiTopic+`/${id}`)
					.subscribe(data =>{this.snackBar.open("Sujet supprimé!","Ok",{duration: 4000});
						this.getAllTopic();
						this.redirectToHomePage();
					},
					error => {
						this.snackBar.open("Echec de la supression!","Ok",{duration: 4000});
					});
	}

	getAllTopic() {
		this.httpClient.get<Topic[]> (this.apiTopic)
					.subscribe(data =>{
						this.topicServiceList=data;
						this.emitAllTopics();
						console.log(this.topicServiceList);
					},
					error => {
						this.snackBar.open("Echec de la récupération des sujets!","Ok",{duration: 4000});
					});
	}

	// getTopic(id:number):Observable<Topic>{
    //     return new Observable<Topic>(observer => {
    //         this.httpClient.get<Topic> (this.apiTopic+`/${id}`, {observe: "body"})
    //             .subscribe(topicfromapi =>{ {
    //                 this.activeTopic = topicfromapi;
	// 				console.log(this.activeTopic);
    //                 this.emitActiveTopic();
                   
    //                 observer.next(topicfromapi);
    //             }
    //          },
    //             error => {
    //              this.snackBar.open("Echec de la récupération du sujet!","Ok",{duration: 4000});
    //             });
            
    //     });
      
    // }

<<<<<<< HEAD
    createTopic(title:string,date:number,content:string){
        this.httpClient.post<Topic> (this.apiTopic, {title:title,user:this.connectedUser,date:date,content:content})
                       .subscribe(data =>{this.activeTopic=data;  
                        this.snackBar.open("Sujet créé!");
                        this.getAllTopic();
                        this.redirectToHomePage();  
                    },
                       error => {
                            this.snackBar.open("Echec de la création du sujet!","Ok",{duration: 4000});
                       });
    }
=======
	getTopic2(id : number) {
		this.httpClient.get<Topic> (this.apiTopic+`/${id}`)
			.subscribe(topicfromapi =>{ {
				this.activeTopic = topicfromapi;
				console.log(this.activeTopic);
				this.emitActiveTopic();
			    this.router.navigate([`topic/${id}`]);
				
			}
		 },
			error => {
			 this.snackBar.open("Echec de la récupération du sujet!","Ok",{duration: 4000});
			});
		
	};
  
>>>>>>> f4347b8429c4e5e61c8c7a49389becc6446629aa



	createTopic(title:string,date:Date,content:Message){
		this.httpClient.post<Topic> (this.apiTopic, {title:title,user:this.connectedUser,date:date,content:content})
					.subscribe(data =>{this.activeTopic=data;  
						this.snackBar.open("Sujet créé!");
						this.redirectToHomePage();  
					},
					error => {
						this.snackBar.open("Echec de la création du sujet!","Ok",{duration: 4000});
					});
	}

	modifTopic(ntitle:string,id:number){
		this.httpClient.patch<Topic> (this.apiTopic+`/${id}`, {title:ntitle})
					.subscribe(data =>{this.activeTopic=data; 
						this.snackBar.open("Titre du sujet modifié!","Ok",{duration: 4000});
						this.getAllTopic();
						this.redirectToHomePage();
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