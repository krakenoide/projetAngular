import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/modeles/User";

@Injectable()
export class serviceUser {
    connectedUser!: User;
    users!: User[];
    apiUser = "http://localhost:8080/api/user"
    urlLogin = "http://localhost:8080/login"
    userSubject = new Subject<User>();

    constructor(private httpClient:HttpClient){}

    setConnectedUser(cuser:User):void {
        this.connectedUser=cuser;
    }

    emitConnectedUser():void{
        this.userSubject.next(this.connectedUser);
    }

    login(username:string,password:string) {
        this.httpClient.post<User> (this.urlLogin, {username:username,password:password})
                       .subscribe(data =>{this.connectedUser=data; this.emitConnectedUser();
                        window.location.href="";
                        console.log(data);
                    },
                       
                       error => {

                       });
    }

    deleteUser(id:number){
        this.httpClient.delete(this.apiUser+`/${id}`)
                       .subscribe(data =>{},
                        error => {});
    }

    getAllUsers() {
        this.httpClient.get<User[]> (this.apiUser)
                       .subscribe(data =>{this.users=data},
                        error => {});
    }

    createUser(username:string,password:string,passwordbis:string){
        this.httpClient.post<User> (this.apiUser, {username:username,password:password,passwordbis:passwordbis})
                       .subscribe(data =>{this.connectedUser=data; this.emitConnectedUser(); window.location.href="";},
                       error => {});
    }

    modifUser(nusername:string,oldpassword:string,npassword:string,npasswordbis:string){
        this.httpClient.post<User> (this.apiUser+`/${this.connectedUser.id}`, {username:nusername,oldpassword:oldpassword,password:npassword,passwordbis:npasswordbis})
                       .subscribe(data =>{this.connectedUser=data; this.emitConnectedUser(); window.location.href="";},
                       error => {});
    }
}