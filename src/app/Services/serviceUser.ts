import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/modeles/User";
import { ActivatedRoute, Router } from "@angular/router";
import { HeaderComponent } from "../components/header/header.component";

@Injectable()
export class serviceUser {
    connectedUser!: User;
    users!: User[];
    apiUser = "http://localhost:8080/api/user"
    urlLogin = "http://localhost:8080/login"
    userSubject = new Subject<User>();

    constructor(private httpClient:HttpClient,private router:Router){
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

    login(username:string,password:string) {
        this.httpClient.post<User> (this.urlLogin, {username:username,password:password})
                       .subscribe(data =>{this.connectedUser=data; this.emitConnectedUser();
                        console.log(data);
                        this.redirectToHomePage()
                    },
                       error => {

                       });
    }

    deleteUser(id:number){
        this.httpClient.delete(this.apiUser+`/${id}`)
                       .subscribe(data =>{},
                        error => {

                        });
    }

    getAllUsers() {
        this.httpClient.get<User[]> (this.apiUser)
                       .subscribe(data =>{this.users=data},
                        error => {

                        });
    }

    createUser(username:string,password:string,passwordbis:string){
        this.httpClient.post<User> (this.apiUser, {username:username,password:password,passwordbis:passwordbis})
                       .subscribe(data =>{this.connectedUser=data; this.emitConnectedUser();   
                        this.redirectToHomePage();
                        
                    },
                       error => {

                       });
    }

    modifUser(nusername:string,oldpassword:string,npassword:string,npasswordbis:string){
        this.httpClient.post<User> (this.apiUser+`/${this.connectedUser.id}`, {username:nusername,oldpassword:oldpassword,password:npassword,passwordbis:npasswordbis})
                       .subscribe(data =>{this.connectedUser=data; this.emitConnectedUser(); this.redirectToHomePage();},
                       error => {
                           
                       });
    }

    redirectToHomePage() : void {
       this.router.navigate(['']);
    }
}