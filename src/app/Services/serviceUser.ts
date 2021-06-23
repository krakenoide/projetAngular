import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/modeles/User";
import { ActivatedRoute, Router } from "@angular/router";
import { HeaderComponent } from "../components/header/header.component";
import { MatSnackBar } from "@angular/material/snack-bar";



@Injectable()
export class serviceUser {
    connectedUser!: User;
    users!: User[];
    apiUser = "http://localhost:8080/api/user"
    urlLogin = "http://localhost:8080/login"
    userSubject = new Subject<User>();

    constructor(private httpClient:HttpClient,private router:Router,private snackBar:MatSnackBar){
        if(this.connectedUser==null){
            this.connectedUser = new User(0,"","",0);
        }
    }
    
    setConnectedUser(cuser:User):void {
        this.connectedUser=cuser;
        this.emitConnectedUser();
    }

    emitConnectedUser():void{
        this.userSubject.next(this.connectedUser);
    }

    login(username:string,password:string,rememberme:boolean) {
        this.httpClient.post<User> (this.urlLogin, {username:username,password:password})
                       .subscribe(data =>{this.connectedUser=data;
                        this.emitConnectedUser();
                        if (rememberme) {
                            localStorage.setItem("storedUser",JSON.stringify(this.connectedUser));
                        } else {localStorage.removeItem("storedUser")}
                        this.snackBar.open("Vous êtes connectés!");
                        this.redirectToHomePage();
                    },
                       error => {
                            this.snackBar.open("Erreur de la connexion!");
                       });
    }

    deleteUser(id:number){
        this.httpClient.delete(this.apiUser+`/${id}`)
                       .subscribe(data =>{this.snackBar.open("Utilisateur supprimé!");
                    },
                        error => {
                            this.snackBar.open("Echec de la supression!");
                        });
    }

    getAllUsers() {
        this.httpClient.get<User[]> (this.apiUser)
                       .subscribe(data =>{this.users=data;
                    },
                        error => {
                            this.snackBar.open("Echec de la récupération des utilisateurs!");
                        });
    }

    getUser(id:number):User{
        this.httpClient.get<User> (this.apiUser+`/${id}`)
                       .subscribe(data =>{return data;
                    },
                        error => {
                            this.snackBar.open("Echec de la récupération d'un utilisateur'!");
                        });
        return this.connectedUser;
    }

    createUser(username:string,password:string,passwordbis:string,rememberme:boolean){
        this.httpClient.post<User> (this.apiUser, {username:username,password:password,passwordConfirm:passwordbis})
                       .subscribe(data =>{this.connectedUser=data; 
                        this.emitConnectedUser();
                        if (rememberme) {
                            localStorage.setItem("storedUser",JSON.stringify(this.connectedUser));
                        } else {localStorage.removeItem("storedUser")}  
                        this.snackBar.open("Utilisateur créé, vous êtes connectés!"); 
                        this.redirectToHomePage(); 
                    },
                       error => {
                            this.snackBar.open("Echec de la création d'utilisateur!");
                       });
    }

    modifUser(nusername:string,oldpassword:string,npassword:string,npasswordbis:string){
        this.httpClient.post<User> (this.apiUser+`/${this.connectedUser.id}`, {username:nusername,oldPassword:oldpassword,password:npassword,passwordConfirm:npasswordbis})
                       .subscribe(data =>{this.connectedUser=data;
                        this.emitConnectedUser(); 
                        if (localStorage.getItem("storedUser")) {
                            localStorage.setItem("storedUser",JSON.stringify(this.connectedUser));    
                        }
                        this.snackBar.open("Utilisateur connecté modifié!");
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